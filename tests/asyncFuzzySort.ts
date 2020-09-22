const fuzzySort = require('fuzzysort');
import Items from 'warframe-items';
import { getRandomInput } from '../generalInputs';
  
type Item = Items[0] & {
  namePrepared?: string,
}

const items: Item[] = new Items({ category: ['All'] });

export default function asyncFuzzySortTest(times: number = 1) {
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
