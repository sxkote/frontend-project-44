import { attempts, generateRandomNumber } from '../index.js';

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const buildRoundsPrime = (roundsCount = attempts) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = generateRandomNumber(2, 30);
    rounds.push([`${number}`, isPrimeNumber(number) ? 'yes' : 'no']);
  }

  return rounds;
};

export default buildRoundsPrime;
