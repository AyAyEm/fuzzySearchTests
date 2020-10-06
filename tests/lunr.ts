import lunr from 'lunr';
import Test from './_baseTest';

export default class LunrTest extends Test {
  public testName = 'lunr';

  private lunrIndex: ReturnType<typeof lunr>;

  constructor(times: number, getInput: () => string) {
    super(times, getInput);

    const { items } = this;
    this.lunrIndex = lunr(function indexPreparation() {
      this.ref('index');
      this.field('namePrepared');

      items.forEach((item, index) => { this.add(Object.assign(item, { index })); });
    });
  }

  async testFunc(input: string) {
    const fuzziness = 2;
    return this.lunrIndex
      .search(input
        .split(' ')
        .map((word: string) => word.concat(`~${fuzziness}`))
        .join(' '))
      .map(({ ref }: { ref: string }) => this.items[Number(ref)]);
  }
}
