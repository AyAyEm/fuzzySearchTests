import fuzzySort from 'fuzzysort';
import Test from './_baseTest';

class AsyncFuzzySortTest extends Test {
  public testName = 'async fuzzySort';

  constructor(public times: number, public getInput: () => string) { super(); }

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

export default function asyncFuzzySortTest(times: number, getInput: () => string) {
  return new AsyncFuzzySortTest(times, getInput).exec();
}
