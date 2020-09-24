import fuzzy from 'fuzzy';
import Test from './_baseTest';

class FuzzyTest extends Test {
  public testName = 'fuzzy';

  constructor(public times: number, public inputsList: string[]) { super() }

  async testFunc(input: string) {
    const options = {
      extract: ({ name }: Test['items'][0]) => name,
    }
    return fuzzy.filter(input, this.items, options).map(({ original }) => original);
  };
}

export default (times: number, inputList: string[]) => new FuzzyTest(times, inputList).exec();
