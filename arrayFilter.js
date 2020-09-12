const items = new (require('warframe-items'))({ categories: ['all']});
const getRandomInput = require('./input');

function arrayFilterTest(times) {
  const start = new Date();

  const result = [];
  for(let i = 0; i < times; i += 1) {
    const input = getRandomInput();
    for (let j = 0; j < items.length; j += 1) {
      if (items[j].name.toLowerCase() === input) result.push(items[j]);
    }
  }

  return  { time: Date.now() - start.getTime(), data: result, name: 'arrayFilter' };
}
module.exports = arrayFilterTest;
