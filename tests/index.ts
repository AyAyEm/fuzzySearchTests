import * as fs from 'fs';
import type { TestFunction } from '../src/index';
import type BaseTest from './_baseTest';

type TestType = new (times: number, getInput: () => string) => BaseTest;

const fsPromises = fs.promises;

const blackListFiles = ['index.ts', 'generalInputs.ts'];

const testFunctions: Promise<TestFunction[]> = fsPromises.readdir('./tests')
  .then((files: string[]) => files
    .filter((fileName) => fileName[0] !== '_' && !blackListFiles.includes(fileName))
    .map((fileName) => import(`./${fileName.split('.')[0]}`)))
  .then((tests) => Promise.all(tests))
  .then((tests: { default: TestType }[]) => tests.map(({ default: Test }) => (
    (times, getInput) => new Test(times, getInput).exec()
  )));

export default testFunctions;
