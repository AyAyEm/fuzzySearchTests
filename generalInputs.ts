export const inputs: string[] = [
  'ignis', 'valkyr', 'rhino', 'valkyr prime', 'aksomati', 'soma',
  'soma prime', 'akboltor', 'flow', 'carrier', 'carrier prime',
];

export const wrongInputs: string[] = [
  'valkkity', 'aksometi', 'carriar', 'flaw', 'suma', 'iginis',
];

const getRandomItem = (list: string[]) => list[Math.round(Math.random() * (inputs.length - 1))];

export const getRandomInput = (): string => getRandomItem(inputs.concat(wrongInputs));
export const getRandomRightInput = (): string => getRandomItem(inputs);
export const getRandomWrongInput = (): string => getRandomItem(wrongInputs);
