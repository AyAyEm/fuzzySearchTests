const Fuse = require('fuse.js');
import Items from 'warframe-items';
import { getRandomInput } from './generalInputs';
  
type Item = Items[0] & {
  namePrepared?: string,
}

const items: Item[] = new Items({ category: ['All'] });

export default function fuseJsTest(times: number) {
  items.forEach((item: Item) => item.namePrepared = item.name.toLowerCase());
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
