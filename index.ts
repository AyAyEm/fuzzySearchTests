import tests from './tests';

async function timeTest(executionTime = 1) {
  const ongoingTests = (await tests).map((functionTest) => functionTest(executionTime));
  return Promise.all(ongoingTests);
}

type TestFunction = (executionTimes: number) => Promise<{ time: number, name: string, result: any[] } []>;

async function logTests(testFunction: TestFunction, executionTimes: number, logFunc = console.log) {
  const results = await testFunction(executionTimes);
  const resultsString = results
    .sort(({ time: a }, { time: b }) => a > b ? 1 : -1)
    .map(({ time, name }, index) => (
      `${index + 1}. ${name}: ${time / executionTimes}ms per operation`
      + `in ${executionTimes} operation(s) took ${time}ms`))
    .join('\n');

  logFunc(resultsString);
}
logTests(timeTest, Number(process.argv[2]) || 1000);
