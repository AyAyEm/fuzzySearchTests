const FlexSearch = require('flexsearch');
const items = new (require('warframe-items'))({ categories: ['all'] });
const getRandomInput = require('./input');

function flexSearchTest(times) {
  const flexSearchIndex = new FlexSearch({
    encode: "extra",
    tokenize: "strict",
    threshold: 1,
    resolution: 9,
    depth: 4,
  });
  items.forEach((item, index) => flexSearchIndex.add(index, item.name));
  const start = new Date();

  const result = [];
  for (let i = 0; i < times; i += 1) {
    const input = 'carriar';
    console.log(input);
    result.push(flexSearchIndex.search({
      query: input,
      field: ['name'],
    }).map((index) => items[index]));
  }

  return { time: Date.now() - start.getTime(), name: 'flexSearch', data: result };
}
module.exports = flexSearchTest;
