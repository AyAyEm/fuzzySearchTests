import * as fs from 'fs';

const fsPromises = fs.promises;

const blackListFiles = ['index.ts', 'generalInputs.ts'];

type TestResult = { time: number, name: string, result: unknown[], memory: string };
type TestFunction = (executionTimes: number, getFunc: () => string) => Promise<TestResult>;

const testFunctions: Promise<TestFunction[]> = fsPromises.readdir('./tests')
  .then((files: string[]) => files
    .filter((fileName) => fileName[0] !== '_' && !blackListFiles.includes(fileName))
    .map((fileName) => import(`./${fileName}`)))
  .then((tests) => Promise.all(tests))
  .then((tests) => tests.map((test) => test.default));

export default testFunctions;
