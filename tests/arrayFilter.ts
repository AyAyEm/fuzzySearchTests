import Test from './_baseTest';

class ArrayFilterTest extends Test {
  public testName = 'arrayFilter';

  constructor(public times: number, public getInput: () => string) { super(); }

  async testFunc(input: string) {
    const result = [];
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].namePrepared === input) result.push(this.items[i]);
    }
    return result;
  }
}

export default function arrayFilterTest(times: number, getInput: () => string) {
  return new ArrayFilterTest(times, getInput).exec();
}
