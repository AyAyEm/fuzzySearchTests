const FuzzySearch = require('fuzzy-search');
const items = new (require('warframe-items'))({ categories: ['all']});
const getRandomInput = require('./input');

function fuzzySearchTest(times) {
  const fuzzySearch = new FuzzySearch(items, ['namePrepared'], { sort: true });
  items.forEach((item) => item.namePrepared = item.name.toLowerCase());
  const start = new Date();

  const result = [];
  for(let i = 0; i < times; i += 1) {
    result.push(fuzzySearch.search(getRandomInput()));
  }

  return  { time: Date.now() - start.getTime(), name: 'fuzzySearch', data: result };
}
module.exports = fuzzySearchTest;
