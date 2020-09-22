import fuzzySort from 'fuzzysort';
import Items from 'warframe-items';
import { getRandomInput } from './generalInputs';
  
type Item = Items[0] & {
  namePrepared?: ReturnType<typeof fuzzySort.prepare>,
}

const items: Item[] = new Items({ category: ['All'] });

type testInfo = {
  time: Date | number,
  name: string,
  data: any,
}

export default function fuzzySortTest(times: number): testInfo {
  const fuzzyOptions = { key: 'namePrepared' };
  items.forEach((item: Item) => { item.namePrepared = fuzzySort.prepare(item.name) });
  const start = new Date();

  const result = [];
  for (let i = 0; i < times; i += 1) {
    result.push(fuzzySort.go(getRandomInput(), items, fuzzyOptions));
  }

  return { time: (Date.now() - start.getTime()), name: 'fuzzySort', data: result };
}
