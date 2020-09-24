import Items from 'warframe-items';
import fuzzySort from 'fuzzysort';

type Item = Items[0] & {
  namePrepared?: string | ReturnType<typeof fuzzySort.prepare>,
}

type TestParams = {
  times: number,
  testName: string,
}

export default abstract class Test {
  public items: Item[] = new Items({ category: ['All'] }).map((item: Item) => {
    item.namePrepared = item.name.toLowerCase()
    return item;
  });
  public abstract testName: TestParams['testName'];
  protected abstract times: number;
  protected abstract inputsList: string[];

  protected abstract async testFunc(input: string): Promise<Test['items']>;

  protected preparationFunc(): void { };

  async exec() {
    const { times, testName } = this;

    const generateInput = (): string => (
      this.inputsList[Math.round(Math.random() * (this.inputsList.length - 1))]);

    this.preparationFunc();

    const start = new Date();
    const result = await Promise.all(Array.from({ length: times }, () => this.testFunc(generateInput())));
    return { time: Date.now() - start.getTime(), data: result, name: testName };
  }
}