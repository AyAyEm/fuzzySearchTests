import FuzzySearch from 'fuzzy-search';
import Test from './_baseTest';

class ArrayFilterTest extends Test {
  public testName = 'fuzzySearch';

  private index = new FuzzySearch(this.items, ['namePrepared'], { sort: true });

  constructor(public times: number, public inputsList: string[]) { super() }

  async testFunc(input: string) {
    return this.index.search(input);
  };
}

export default (times: number, inputList: string[]) => new ArrayFilterTest(times, inputList).exec();
