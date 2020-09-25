import testsList from './tests';
import { inputs } from './generalInputs';

type TestResult = { time: number, name: string, result: any[], memory: string };
type TestFunction = (executionTimes: number) => Promise<TestResult[]>;

async function timeTest(executionTimes = 1) {
  const results: TestResult[] = [];
  const tests = await testsList;
  for (let i = 0; i < tests.length; i += 1) {
    results.push(await tests[i](executionTimes, inputs));
  }
  return results;
}

async function logTests(testFunction: TestFunction, executionTimes: number, logFunc = console.log) {
  const results = await testFunction(executionTimes);
  const resultsString = results
    .sort(({ time: a }, { time: b }) => (a > b ? 1 : -1))
    .map(({ time, name, memory }, index) => (
      `${index + 1}. ${name}: ${time / executionTimes}ms/op `
      + `in ${executionTimes} op(s) took ${time}ms ${memory}`))
    .join('\n');

  logFunc(resultsString);
}
logTests(timeTest, Number(process.argv[2]) || 1000);
