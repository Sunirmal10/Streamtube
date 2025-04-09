
// random hexcode //

const generateRandomHexCode = () => {
  const characters = '0123456789ABCDEF';
  let hexCode = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    hexCode += characters[randomIndex];
  }

  return hexCode;
};

export const randomColor = generateRandomHexCode();
console.log('Random Color:', randomColor);
