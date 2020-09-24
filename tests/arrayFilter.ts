import Test from './_baseTest';

const testFunc = (input: string, items: Test['items']) => {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].namePrepared === input) result.push(items[i]);
  }
  return result;
};

export default function arrayFilterTest(times: number, inputList: string[]) {
  return new Test(inputList, {
    times,
    testFunc,
    testName: 'arrayFilter',
  }).exec();
}