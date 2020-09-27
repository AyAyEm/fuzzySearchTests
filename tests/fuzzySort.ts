import fuzzySort from 'fuzzysort';
import Test from './_baseTest';

class FuzzySortTest extends Test {
  public testName = 'fuzzySort';

  constructor(public times: number, public getInput: () => string) { super(); }

  async testFunc(input: string) {
    const fuzzyOptions = { keys: ['namePrepared'] };
    return (await fuzzySort.go(input, this.items, fuzzyOptions))
      .map(({ obj }) => obj);
  }

  preparationFunc() {
    this.items.forEach((item) => { item.namePrepared = fuzzySort.prepare(item.name); });
  }
}

export default function fuzzySortTest(times: number, getInput: () => string) {
  return new FuzzySortTest(times, getInput).exec();
}
