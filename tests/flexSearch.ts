const FlexSearch = require('flexsearch');
import Items from 'warframe-items';
import { getRandomInput } from '../generalInputs';
  
type Item = Items[0] & {
  namePrepared?: string,
}

const items: Item[] = new Items({ category: ['All'] });

export default function flexSearchTest(times: number) {
  const flexSearchIndex = new FlexSearch({
    encode: 'extra',
    tokenize: 'strict',
    threshold: 1,
    resolution: 9,
    depth: 4,
  });
  items.forEach((item, index) => flexSearchIndex.add(index, item.name));
  const start = new Date();

  const result = [];
  for (let i = 0; i < times; i += 1) {
    const input = getRandomInput();
    result.push(flexSearchIndex.search({
      query: input,
      field: ['name'],
    }).map((index: number) => items[index]));
  }

  return { time: Date.now() - start.getTime(), name: 'flexSearch', data: result };
}
