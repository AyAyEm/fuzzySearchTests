function randomNumber(lower = 0, upper = 1): number {
  return Math.round((Math.random() * (upper - lower)) + lower);
}

interface Options {
  uppercase?: boolean,
  times?: number,
}

/**
 * Rolls n times random letters in the string.
 *
 * @param { string } input String to randomize.
 *
 * @param {{ uppercase: boolean, times: number }} options Options to define the output.
 * @param { boolean } options.uppercase If true then the output may have uppercase letters.
 * @param { number } options.times how much times to random
 *
 */

export function stringRandomizer(input: string, options?: Options): string {
  if (!/[a-z]/gi.test(input)) {
    throw new Error(`Invalid input string: ${input} must have at least one [a-z] character`);
  }

  const { uppercase = false, times = 1 } = options || {};

  function getValidIndex(): number {
    const whiteListIndex = [...input.matchAll(/[a-z]{1}/gi)]
      .map(({ index }) => index)
      .filter((index) => index !== undefined && index !== null) as number[];
    const index = randomNumber(0, whiteListIndex.length - 1);

    return whiteListIndex[index];
  }

  function randomizeInput(): string {
    const charactersList: string[] = input.split('');
    for (let i = 0; i < times; i += 1) {
      let charRange: [number, number] = [97, 122];
      if (uppercase && randomNumber() === 1) charRange = [65, 90];

      charactersList[getValidIndex()] = String.fromCharCode(randomNumber(...charRange));
    }
    return charactersList.join('');
  }

  return randomizeInput();
}
