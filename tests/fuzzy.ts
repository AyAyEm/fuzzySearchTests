import fuzzy from 'fuzzy';
import Test from './_baseTest';

export default class FuzzyTest extends Test {
  public testName = 'fuzzy';

  async testFunc(input: string) {
    const options = {
      extract: ({ name }: Test['items'][0]) => name,
    };
    return fuzzy.filter(input, this.items, options).map(({ original }) => original);
  }
}
