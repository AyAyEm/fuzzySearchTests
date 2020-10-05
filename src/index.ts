import _ from 'lodash';
import Table from 'cli-table';
import type Items from 'warframe-items';
import fuzzySort from 'fuzzysort';
import testsList from '../tests';
import { inputs, stringRandomizer, ProgressBar } from './utils';

type Item = Items[0] & {
  namePrepared?: string | ReturnType<typeof fuzzySort.prepare>,
}

export interface TestResult { time: number, name: string, data: Item[][], memory: string }
export type TestFunction = (
  (executionTimes: number, getInput: () => string) => Promise<TestResult>);

async function timeTest(executionTimes = 1) {
  const tests = await testsList;

  const timeTestBar = new ProgressBar('time');
  timeTestBar.start(tests.length, 0);

  const results = [];
  const getInput = (): string => inputs[_.random(0, inputs.length - 1)];

  for (let i = 0; i < tests.length; i += 1) {
    results.push(await tests[i](executionTimes, getInput));
    timeTestBar.increment();
  }
  timeTestBar.stop();

  return results;
}

async function accuracyTest(randomFactor = 1) {
  const wrongInputs: string[] = inputs.map(
    (input: string) => stringRandomizer(input, { uppercase: false, times: randomFactor }),
  );

  function generateWrongInputFunc(): () => string {
    let index = 0;
    return () => {
      const input = wrongInputs[index];
      index += 1;
      return input;
    };
  }

  function getAccuracy<T = string>([originalList, resultedList]: [T[], T[]]): number {
    const matches: number = resultedList.reduce((matchCount: number, item, index) => {
      if (item === originalList[index]) return matchCount + 1;
      return matchCount;
    }, 0);
    return (100 / originalList.length) * matches;
  }

  const tests = await testsList;

  const accuracyTestBar = new ProgressBar('accuracy');
  accuracyTestBar.start(tests.length, 0);

  const results = await Promise.all(tests.map(async (test) => {
    const result = await test((inputs.length), generateWrongInputFunc());
    accuracyTestBar.increment();
    return result;
  }));
  accuracyTestBar.stop();

  return new Map(results.map((result) => {
    const resultedList = result.data.map(([firstResult]) => firstResult?.namePrepared);
    // if (result.name === 'flexSearch') console.log(result.data, wrongInputs);
    return [result.name, getAccuracy([inputs, resultedList])];
  }));
}

async function memoryTest() {
  const tests = await testsList;

  const memoryTestBar = new ProgressBar('memory');
  memoryTestBar.start(tests.length, 0);

  const results = await Promise.all(tests.map(async (test) => {
    const result = await test(1, () => inputs[0]);
    memoryTestBar.increment();
    return result;
  }));
  memoryTestBar.stop();

  const memoryUsage: [string, string][] = results.map(({ name, memory }) => [name, memory]);
  return memoryUsage;
}

async function logTests(executionTimes: number) {
  const timeResults = await timeTest(executionTimes);
  const accuracyResultsMap = await accuracyTest(1);
  const memoryResultsMap = new Map(await memoryTest());

  const mergedResults = timeResults
    .map(({ time, name }) => (
      {
        msPerOp: time / executionTimes,
        packageName: name,
        memory: memoryResultsMap.get(name),
        accuracy: accuracyResultsMap.get(name),
      }
    ))
    .sort((a, b) => Number(b.accuracy) - (Number(a.accuracy)));

  const table = new Table({
    head: ['package', 'ms/op', 'memory', 'accuracy'],
  });
  table.push(...mergedResults
    .map(({
      msPerOp, packageName, memory, accuracy,
    }) => [packageName, msPerOp, memory, `${accuracy?.toFixed(2)}%`]));

  console.log(table.toString());
}

logTests(Number(process.argv[2]) || 10);
