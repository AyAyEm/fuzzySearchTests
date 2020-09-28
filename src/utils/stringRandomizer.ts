function randomNumber(lower = 0, upper = 1): number {
  return Math.round((Math.random() * (upper - lower)) + lower);
}

/**
 * Rolls n times random letters in the string
 */
export function stringRandomizer(input: string, times = 1): string {
  if (!/[a-z]/gi.test(input)) {
    throw new Error(`Invalid input string: ${input} must have at least one [a-z] character`);
  }

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
      charactersList[getValidIndex()] = String.fromCharCode(randomNumber(97, 122));
    }
    return charactersList.join('');
  }

  return randomizeInput();
}
