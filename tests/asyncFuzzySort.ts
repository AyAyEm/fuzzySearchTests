import fuzzySort from 'fuzzysort';
import Test from './_baseTest';

class AsyncFuzzySortTest extends Test {
  public testName = 'async fuzzySort';

  constructor(public times: number, public inputsList: string[]) { super() }

  async testFunc(input: string) {
    const fuzzyOptions = { keys: ['namePrepared'] };
    return fuzzySort
      .goAsync(input, this.items, fuzzyOptions)
      .then((result) => result.map(({ obj }) => obj));
  };

  preparationFunc() {
    this.items.forEach((item) => item.namePrepared = fuzzySort.prepare(item.name));
  }
}

export default function asyncFuzzySortTest(times: number, inputList: string[]) {
  return new AsyncFuzzySortTest(times, inputList).exec();
}
