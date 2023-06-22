// time //

const calculateTimeDifference = () => {
  const currentTime = new Date();
  const givenTimeGMT = new Date('2023-05-05T13:23:15Z');
  
  const currentTimeGMT530 = new Date(currentTime.getTime() + (5.5 * 60 * 60 * 1000));
  const givenTimeGMT530 = new Date(givenTimeGMT.getTime() + (5.5 * 60 * 60 * 1000));

  const timeDifferenceMillis = currentTimeGMT530.getTime() - givenTimeGMT530.getTime();

  const secondsDiff = Math.floor(timeDifferenceMillis / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);
  const monthsDiff = Math.floor(daysDiff / 30);
  const yearsDiff = Math.floor(monthsDiff / 12);

  const timeDifference =
    secondsDiff <= 59 ? '1 minute ago' :
    minutesDiff <= 59 ? `${minutesDiff} minutes ago` :
    hoursDiff <= 23 ? `${hoursDiff} hours ago` :
    daysDiff === 1 ? '1 day ago' :
    daysDiff <= 29 ? `${daysDiff} days ago` :
    monthsDiff === 1 ? '1 month ago' :
    monthsDiff <= 11 ? `${monthsDiff} months ago` :
    yearsDiff === 1 ? '1 year ago' :
    `${yearsDiff} years ago`;

  console.log('Time difference:', timeDifference);
};

export const differentTime = calculateTimeDifference();

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
