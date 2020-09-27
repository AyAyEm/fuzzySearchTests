import _ from 'lodash';
import type Items from 'warframe-items';
import fuzzySort from 'fuzzysort';
import testsList from '../tests';
import { inputs } from './generalInputs';

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

function stringRandomizer(input: string, times = 1): string {
  const result: string[] = input.split('');
  for (let i = 0; i < times; i += 1) {
    result[_.random(0, result.length - 1)] = String.fromCharCode(_.random(97, 122));
  }

  return result.join('');
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

  function getAccuracy<T = string>([originalList, resultedList]: [T[], T[]]) {
    return resultedList.reduce((accuracy: number, item, index) => (
      (item === originalList[index] ? accuracy : accuracy - (100 / originalList.length))), 100);
  }

  const tests = await testsList;
  const results = await Promise.all(tests.map(async (test) => {
    const result = await test((inputs.length - 1), getWrongInputFunc());
    return {
      name: result.name,
      data: result.data.map(([firstResult]) => firstResult?.namePrepared),
    };
  }));
  return new Map(results.map((result) => {
    const accuracy = getAccuracy([inputs, result.data]);
    return [result.name, accuracy];
  }));
}

async function logTests(
  groupTestFunction: GroupTestFunction, executionTimes: number, logFunc = console.log,
) {
  const results = await groupTestFunction(executionTimes);
  const resultsString = results
    .sort(({ time: a }, { time: b }) => (a > b ? 1 : -1))
    .map(({ time, name, memory }, index) => (
      `${index + 1}. ${name}: ${time / executionTimes}ms/op `
      + `in ${executionTimes} op(s) took ${time}ms ${memory}`))
    .join('\n');

  logFunc(resultsString);
}
// logTests(timeTest, Number(process.argv[2]) || 1000);
accuracyTest().then(console.log);
