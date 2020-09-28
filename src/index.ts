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
type GroupTestFunction = (executionTimes: number) => Promise<TestResult[]>;

async function timeTest(executionTimes = 1) {
  const results = [];
  const tests = await testsList;
  const getInput = (): string => inputs[_.random(0, inputs.length - 1)];
  for (let i = 0; i < tests.length; i += 1) {
    results.push(await tests[i](executionTimes, getInput));
  }

  return results;
}

async function accuracyTest() {
  const wrongInputs: string[] = inputs.map((input: string) => stringRandomizer(input));

  const getWrongInputFunc: () => () => string = () => {
    let index = 0;
    return () => {
      const input = wrongInputs[index];
      index += 1;
      return input;
    };
  };

  function getAccuracy<T = string>([originalList, resultedList]: [T[], T[]]): number {
    const matches: number = resultedList.reduce((matchCount: number, item, index) => {
      if (item === originalList[index]) return matchCount + 1;
      return matchCount;
    }, 0);
    return (100 / originalList.length) * matches;
  }

  const results = await Promise.all((await testsList).map((test) => (
    test((inputs.length), getWrongInputFunc()))));

  return new Map(results.map((result) => {
    const resultedList = result.data.map(([firstResult]) => firstResult?.namePrepared);
    if (result.name === 'arrayFilter') console.log(resultedList, result.name);
    return [result.name, getAccuracy([inputs, resultedList])];
  }));
}

async function logTests(
  executionTimes: number, logFunc = console.log,
) {
  const timeResults = await timeTest(executionTimes);
  const accuracyResults = await accuracyTest();
  const resultsString = timeResults
    .sort(({ time: a }, { time: b }) => (a > b ? 1 : -1))
    .map(({ time, name, memory }, index) => (
      `${index + 1}. ${name}: ${time / executionTimes}ms/op `
      + `in ${executionTimes} op(s) took ${time}ms ${memory}`))
    .join('\n');

  logFunc(resultsString);
}
// logTests(timeTest, Number(process.argv[2]) || 1000);
accuracyTest().then(console.log);
