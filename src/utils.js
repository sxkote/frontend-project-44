const attempts = 3;

const generateRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);

export {
  attempts,
  generateRandomNumber,
};
