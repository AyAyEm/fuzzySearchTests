import fuzzySort from 'fuzzysort';
import Test from './_baseTest';

export default class AsyncFuzzySortTest extends Test {
  public testName = 'async fuzzySort';

  async testFunc(input: string) {
    const fuzzyOptions = { keys: ['namePrepared'] };
    return fuzzySort
      .goAsync(input, this.items, fuzzyOptions)
      .then((result) => result.map(({ obj }) => obj));
  }

  preparationFunc() {
    this.items.forEach((item) => { item.namePrepared = fuzzySort.prepare(item.name); });
  }
}
