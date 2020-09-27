import fuzzy from 'fuzzy';
import Test from './_baseTest';

class FuzzyTest extends Test {
  public testName = 'fuzzy';

  constructor(public times: number, public getInput: () => string) { super(); }

  async testFunc(input: string) {
    const options = {
      extract: ({ name }: Test['items'][0]) => name,
    };
    return fuzzy.filter(input, this.items, options).map(({ original }) => original);
  }
}

export default function fuzzyTest(times: number, getInput: () => string) {
  return new FuzzyTest(times, getInput).exec();
}
