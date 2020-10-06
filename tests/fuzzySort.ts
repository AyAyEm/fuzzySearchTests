import fuzzySort from 'fuzzysort';
import Test from './_baseTest';

export default class FuzzySortTest extends Test {
  public testName = 'fuzzySort';

  async testFunc(input: string) {
    const fuzzyOptions = { keys: ['namePrepared'] };
    return (await fuzzySort.go(input, this.items, fuzzyOptions))
      .map(({ obj }) => obj);
  }

  preparationFunc() {
    this.items.forEach((item) => { item.namePrepared = fuzzySort.prepare(item.name); });
  }
}
