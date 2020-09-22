import * as fs from 'fs';
const fsPromises = fs.promises;

const blackListFiles = ['index.ts', 'generalInputs.ts'];

const testFunctions = fsPromises.readdir('./tests')
  .then((files: string[]) => files
    .filter((fileName) => !blackListFiles.includes(fileName))
    .map((fileName) => import(`./${fileName}`)))
  .then((tests) => Promise.all(tests))
  .then((tests) => tests.map((test) => test.default));

export default testFunctions;