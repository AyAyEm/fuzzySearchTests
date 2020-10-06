import FuzzySearch from 'fuzzy-search';
import Test from './_baseTest';

export default class FuzzyDashSearch extends Test {
  public testName = 'fuzzy-search';

  private index = new FuzzySearch(this.items, ['namePrepared'], { sort: true });

  async testFunc(input: string) {
    return this.index.search(input);
  }
}
