import _ from 'lodash';

/**
 * Rolls n times random letters in the string
 */

export function stringRandomizer(input: string, times = 1): string {
  const result: string[] = input.split('');
  for (let i = 0; i < times; i += 1) {
    result[_.random(0, result.length - 1)] = String.fromCharCode(_.random(97, 122));
  }

  return result.join('');
}
