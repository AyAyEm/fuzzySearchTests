import fuzzy from 'fuzzy';
import Test from './_baseTest';

export default class FuzzyTest extends Test {
  public testName = 'fuzzy';

  constructor(public times: number, public getInput: () => string) { super(); }

  async testFunc(input: string) {
    const options = {
      extract: ({ name }: Test['items'][0]) => name,
    };
    return fuzzy.filter(input, this.items, options).map(({ original }) => original);
  }
}
