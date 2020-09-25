import FlexSearch from 'flexsearch';
import Test from './_baseTest';

class FlexSearchTest extends Test {
  public testName = 'flexSearch';

  private index = FlexSearch.create({
    encode: 'extra',
    tokenize: 'strict',
    threshold: 1,
    resolution: 9,
    depth: 4,
    async: false,
  });

  constructor(public times: number, public inputsList: string[]) { super(); }

  async testFunc(input: string) {
    return [this.index.search({
      query: input,
      field: ['name'],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any].map((resultIndex: number) => this.items[resultIndex]);
  }

  preparationFunc() {
    this.items.forEach((item, index) => this.index.add(index, item.name));
  }
}

export default (times: number, inputList: string[]) => new FlexSearchTest(times, inputList).exec();
