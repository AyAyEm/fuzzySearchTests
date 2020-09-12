const fuzzySort = require('fuzzysort');
const items = new (require('warframe-items'))({ categories: ['all'] });
const getRandomInput = require('./input');

function asyncFuzzySortTest(times = 1) {
  const fuzzyOptions = { key: 'namePrepared' };
  items.forEach((item) => item.namePrepared = fuzzySort.prepare(item.name));

  const start = new Date();
  const fuzzySortFunction = () => fuzzySort.goAsync(getRandomInput(), items, fuzzyOptions)
  const searchPromises = new Array(times)
    .fill(fuzzySortFunction)
    .map((func) => func());

  return Promise.all(searchPromises).then((data) => ({ 
    time: Date.now() - start.getTime(), name: 'asyncFuzzySort', data }));
}
module.exports = asyncFuzzySortTest;
