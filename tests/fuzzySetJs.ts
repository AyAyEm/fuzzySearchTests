import FuzzySet from 'fuzzyset.js';

import Test from './_baseTest';

export default class FuzzySetJsTest extends Test {
  public testName = 'fuzzySetJs';

  private fuzzySet = FuzzySet(this.items.map(({ namePrepared }) => namePrepared) as string[]);

  private nameIndexMap = new Map(this.items.map(
    ({ namePrepared }, index) => [namePrepared, index],
  ));

  async testFunc(input: string) {
    const possibilities = this.fuzzySet.get(input);

    const result: Test['items'] = [];
    if (possibilities) {
      possibilities.forEach(({ 1: itemName }: [number, string]) => {
        const index = this.nameIndexMap.get(itemName);
        if (index) result.push(this.items[index]);
      });
    }

    return result;
  }
}
