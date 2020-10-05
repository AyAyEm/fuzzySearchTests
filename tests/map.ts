import Test from './_baseTest';

class MapTest extends Test {
  public testName = 'JavaScript-Map';

  private nameIndexMap = new Map(this.items.map(
    ({ namePrepared }, index) => [namePrepared, index],
  ));

  constructor(public times: number, public getInput: () => string) { super(); }

  async testFunc(input: string) {
    const itemIndex = this.nameIndexMap.get(input);
    return itemIndex ? [this.items[itemIndex]] : [];
  }
}

export default function mapTest(times: number, getInput: () => string) {
  return new MapTest(times, getInput).exec();
}
