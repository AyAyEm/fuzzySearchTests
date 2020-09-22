const FuzzySearch = require('fuzzy-search');
import Items from 'warframe-items';
import { getRandomInput } from '../generalInputs';
  
type Item = Items[0] & {
  namePrepared?: string,
}

const items: Item[] = new Items({ category: ['All'] });

export default function fuzzySearchTest(times: number) {
  const fuzzySearch = new FuzzySearch(items, ['namePrepared'], { sort: true });
  items.forEach((item) => item.namePrepared = item.name.toLowerCase());
  const start = new Date();

  const result = [];
  for(let i = 0; i < times; i += 1) {
    result.push(fuzzySearch.search(getRandomInput()));
  }

  return  { time: Date.now() - start.getTime(), name: 'fuzzySearch', data: result };
}
