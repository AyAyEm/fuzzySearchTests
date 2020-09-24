import Items from 'warframe-items';

type Item = Items[0] & {
  namePrepared?: string,
}

type TestParams = {
  times: number,
  testName: string,
  testFunc: (input: string, items: Items) => any,
  preparationFunc?: (list: Item[]) => void,
}

export default class Test {
  public items: Item[] = new Items({ category: ['All'] }).map((item: Item) => {
    item.namePrepared = item.name.toLowerCase()
    return item;
  });
  public times: TestParams['times'];
  public testName: TestParams['testName'];
  public testFunc: TestParams['testFunc'];
  public preparationFunc: TestParams['preparationFunc'];

  constructor(public inputsList: string[], { times, testName, testFunc, preparationFunc }: TestParams) {
    this.times = times;
    this.testName = testName;
    this.testFunc = testFunc;
    this.preparationFunc = preparationFunc;
  }

  async exec() {
    const { times, testName, testFunc, preparationFunc } = this;

    const generateInput = (): string => (
      this.inputsList[Math.round(Math.random() * (this.inputsList.length - 1))]);
    
    if (preparationFunc) preparationFunc(this.items);

    const start = new Date();
    const result = Array.from({ length: times }, () => testFunc(generateInput(), this.items));
    return { time: Date.now() - start.getTime(), data: result, name: testName };
  }
}