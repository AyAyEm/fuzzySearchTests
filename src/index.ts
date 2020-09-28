import _ from 'lodash';
import type Items from 'warframe-items';
import fuzzySort from 'fuzzysort';
import testsList from '../tests';
import { inputs, stringRandomizer } from './utils';

type Item = Items[0] & {
  namePrepared?: string | ReturnType<typeof fuzzySort.prepare>,
}

export interface TestResult { time: number, name: string, data: Item[][], memory: string }
export type TestFunction = (
  (executionTimes: number, getInput: () => string) => Promise<TestResult>);

async function timeTest(executionTimes = 1) {
  const results = [];
  const tests = await testsList;
  const getInput = (): string => inputs[_.random(0, inputs.length - 1)];
  for (let i = 0; i < tests.length; i += 1) {
    results.push(await tests[i](executionTimes, getInput));
  }

  return results;
}

async function accuracyTest(randomFactor = 1) {
  const wrongInputs: string[] = inputs.map(
    (input: string) => stringRandomizer(input, { uppercase: false, times: randomFactor }),
  );

  function getWrongInput(): () => string {
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

  const results = await Promise.all((await testsList).map((test) => (
    test((inputs.length), getWrongInput()))));

  return new Map(results.map((result) => {
    const resultedList = result.data.map(([firstResult]) => firstResult?.namePrepared);
    // if (result.name === 'flexSearch') console.log(result.data, wrongInputs);
    return [result.name, getAccuracy([inputs, resultedList])];
  }));
}

async function memoryTest() {
  const tests = await testsList;
  const results = await Promise.all(tests.map((test) => test(1, () => inputs[0])));
  const memoryUsage = results.map(({ name, memory }) => [name, memory]);

  return memoryUsage;
}

async function logTests(
  executionTimes: number, logFunc = console.log,
) {
  const timeResults = await timeTest(executionTimes);
  const timeResultsOutput = timeResults
    .sort(({ time: a }, { time: b }) => (a > b ? 1 : -1))
    .map(({ time, name }, index) => (
      `${index + 1}. ${name}: ${time / executionTimes}ms/op `
      + `in ${executionTimes} op(s) took ${time}ms`))
    .join('\n');

  const accuracyResults = await accuracyTest(1);
  const accuracyResultsOutput = [...accuracyResults.entries()]
    .sort(({ 1: a }, { 1: b }) => (a > b ? -1 : 1))
    .map(([name, accuracy], index) => `${index + 1}. ${name}: ${accuracy.toFixed(2)}%`)
    .join('\n');

  const memoryResults = await memoryTest();
  const memoryResultsOutput = memoryResults
    .sort(({ 1: a }, { 1: b }) => (a < b ? -1 : 1))
    .map(([name, memory], index) => `${index + 1}. ${name}: ${memory}`)
    .join('\n');

  logFunc(`Time test:\n${timeResultsOutput}\n\n`
    + `Accuracy test\n${accuracyResultsOutput}\n\n`
    + `Memory test\n${memoryResultsOutput}`);
}
logTests(Number(process.argv[2]) || 1000);
