import * as fs from 'fs';
import type { TestFunction } from '../src/index';

const fsPromises = fs.promises;

const blackListFiles = ['index.ts', 'generalInputs.ts'];

const testFunctions: Promise<TestFunction[]> = fsPromises.readdir('./tests')
  .then((files: string[]) => files
    .filter((fileName) => fileName[0] !== '_' && !blackListFiles.includes(fileName))
    .map((fileName) => import(`./${fileName.split('.')[0]}`)))
  .then((tests) => Promise.all(tests))
  .then((tests) => tests.map((test) => test.default));

export default testFunctions;
