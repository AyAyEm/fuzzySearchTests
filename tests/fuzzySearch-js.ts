/* eslint-disable @typescript-eslint/no-var-requires */
import Test from './_baseTest';

const FuzzySearchJs = require('fuzzysearch-js');
// const levenshteinFS = require('fuzzysearch-js/js/modules/LevenshteinFS');
const indexOfFS = require('fuzzysearch-js/js/modules/IndexOfFS');
const wordCountFS = require('fuzzysearch-js/js/modules/WordCountFS');

export default class FuzzySearchJsTest extends Test {
  public testName = 'Fuzzysearch-js';

  private fuzzySearchJs = new FuzzySearchJs(
    this.items.map(({ namePrepared }) => namePrepared) as string[],
    { minimumScore: 1 },
  );

  private nameIndexMap = new Map(this.items.map(
    ({ namePrepared }, index) => [namePrepared, index],
  ));

  constructor(public times: number, public getInput: () => string) { super(); }

  preparationFunc() {
    // this.fuzzySearchJs.addModule(levenshteinFS());
    this.fuzzySearchJs.addModule(indexOfFS());
    this.fuzzySearchJs.addModule(wordCountFS());
  }

  async testFunc(input: string) {
    return this.fuzzySearchJs.search(input).map(
      ({ value }: { value: string }) => this.items[this.nameIndexMap.get(value) as number],
    );
  }
}
