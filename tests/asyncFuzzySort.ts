import fuzzySort from 'fuzzysort';
import Test from './_baseTest';

const testFunc = (input: string, items: Test['items']) => {
  const fuzzyOptions = { key: 'namePrepared' };
  return fuzzySort.goAsync(input, items, fuzzyOptions)
};

const preparationFunc = (items: any[]) => items.forEach((item) => item.namePrepared = fuzzySort.prepare(item.name));

export default function arrayFilterTest(times: number, inputList: string[]) {
  return new Test(inputList, {
    times,
    preparationFunc,
    testFunc,
    testName: 'async FuzzySort',
  }).exec();
}
