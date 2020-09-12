const fuzzySort = require('fuzzysort');
const items = new (require('warframe-items'))({ categories: ['all']});
const getRandomInput = require('./input');

function fuzzySortTest(times) {
  const fuzzyOptions = { key: 'namePrepared' };
  items.forEach((item) => item.namePrepared = fuzzySort.prepare(item.name));
  const start = new Date();

  const result = [];
  for(let i = 0; i < times; i += 1) {
    result.push(fuzzySort.go(getRandomInput(), items, fuzzyOptions));
  }

  return { time: Date.now() - start.getTime(), name: 'fuzzySort', data: result };
}
module.exports = fuzzySortTest;
