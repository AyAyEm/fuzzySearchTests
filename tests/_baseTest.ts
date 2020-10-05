import Items from 'warframe-items';
import fuzzySort from 'fuzzysort';

type Item = Items[0] & {
  namePrepared?: string | ReturnType<typeof fuzzySort.prepare>,
}

export default abstract class Test {
  public items: Item[] = new Items({ category: ['All'] }).map((item: Item) => {
    item.namePrepared = item.name.toLowerCase();
    return item;
  });

  public abstract testName: string;

  protected abstract times: number;

  protected abstract getInput: () => string;

  protected preparationFunc(): void { }

  protected abstract async testFunc(input: string): Promise<Test['items']>;

  async exec() {
    const { times, testName } = this;

    this.preparationFunc();
    const memoryUsage = `${(Buffer.byteLength(JSON.stringify(this)) / 1e6).toFixed(2)}MB`;

    const start = Date.now();
    const results = await Promise.all(
      Array.from({ length: times }, () => this.testFunc(this.getInput())),
    );

    return {
      time: Date.now() - start, data: results, name: testName, memory: memoryUsage,
    };
  }
}
