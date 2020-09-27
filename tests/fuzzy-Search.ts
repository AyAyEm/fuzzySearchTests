import FuzzySearch from 'fuzzy-search';
import Test from './_baseTest';

class ArrayFilterTest extends Test {
  public testName = 'fuzzy-search';

  private index = new FuzzySearch(this.items, ['namePrepared'], { sort: true });

  constructor(public times: number, public getInput: () => string) { super(); }

  async testFunc(input: string) {
    return this.index.search(input);
  }
}

export default function arrayFilterTest(times: number, getInput: () => string) {
  return new ArrayFilterTest(times, getInput).exec();
}
