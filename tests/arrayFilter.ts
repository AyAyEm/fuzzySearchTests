import Test from './_baseTest';

export default class ArrayFilterTest extends Test {
  public testName = 'JavaScript-arrayFilter';

  constructor(public times: number, public getInput: () => string) { super(); }

  async testFunc(input: string) {
    const result = [];
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].namePrepared === input) result.push(this.items[i]);
    }
    return result;
  }
}
