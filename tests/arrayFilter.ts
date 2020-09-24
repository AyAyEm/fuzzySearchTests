import Test from './_baseTest';

class ArrayFilterTest extends Test {
  public testName = 'arrayFilter';

  constructor(public times: number, public inputsList: string[]) { super() }

  async testFunc(input: string) {
    const result = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].namePrepared === input) result.push(this.items[i]);
    }
    return result;
  };
}

export default function (times: number, inputsList: string[]) {
  return new ArrayFilterTest(times, inputsList).exec();
}