import Fuse from 'fuse.js';
import Test from './_baseTest';

export default class FuseJsTest extends Test {
  public testName = 'fuseJs';

  private fuse = new Fuse(this.items, {
    keys: ['namePrepared'],
    shouldSort: true,
    isCaseSensitive: false,
  });

  async testFunc(input: string) {
    return this.fuse.search(input).map(({ item }) => item);
  }
}
