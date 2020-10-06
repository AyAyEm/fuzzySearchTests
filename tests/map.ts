import Test from './_baseTest';

export default class MapTest extends Test {
  public testName = 'JavaScript-Map';

  private nameIndexMap = new Map(this.items.map(
    ({ namePrepared }, index) => [namePrepared, index],
  ));

  async testFunc(input: string) {
    const itemIndex = this.nameIndexMap.get(input);
    return itemIndex ? [this.items[itemIndex]] : [];
  }
}
