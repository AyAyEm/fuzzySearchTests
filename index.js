const arrayFilter = require('./arrayFilter');
const fuseJs = require('./fuseJs');
const fuzzySearch = require('./fuzzySearch');
const fuzzySort = require('./fuzzySort');
const asyncFuzzySort = require('./asyncFuzzySort');

const tests = [arrayFilter, fuseJs, fuzzySearch, fuzzySort, asyncFuzzySort];

async function timeTest(time = 1) {
  const ongoingTests = tests.map((functionTest) => functionTest(time));
  return Promise.all(ongoingTests);
}

async function logTests(testFunction, executionTimes, logFunc = console.log) {
  const results = await testFunction(executionTimes);
  const resultsString = results
    .sort(({ time: a }, { time: b }) => a > b ? 1 : -1)
    .map(({ time, name }, index) => (
      `${index + 1}. ${name}: ${time / executionTimes}ms per operation`
      + `in ${executionTimes} operation(s) took ${time}ms`))
    .join('\n');

  logFunc(resultsString);
}
logTests(timeTest, process.argv[2] || 1000);
