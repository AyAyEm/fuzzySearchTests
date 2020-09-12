const Fuse = require('fuse.js');
const items = new (require('warframe-items'))({ categories: ['all']});
const getRandomInput = require('./input');

function fuseJsTest(times) {
  items.forEach((item) => item.namePrepared = item.name.toLowerCase());
  const fuse = new Fuse(items, {
    keys: ['namePrepared'],
    shouldSort: true,
    isCaseSensitive: false,
  });
  const start = new Date();

  const result = [];
  for(let i = 0; i < times; i += 1) {
    result.push(fuse.search(getRandomInput()));
  }

  return { time: Date.now() - start.getTime(), name: 'fuseJs', data: result };
}
module.exports = fuseJsTest;
