const inputs = [
  'ignis', 'valkyr', 'rhino', 'valkyr prime', 'aksomati', 'soma',
  'soma prime', 'akboltor', 'flow', 'carrier', 'carrier prime',
  // wrong names input
  'valkkity', 'aksometi', 'carriar', 'flaw', 'suma', 'iginis',
];
module.exports = getRandomInput = () => inputs[Math.round(Math.random() * (inputs.length - 1))];