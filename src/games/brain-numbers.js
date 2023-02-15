import { attempts, generateRandomNumber } from '../index.js';

const isEvenNumber = (number) => number % 2 === 0;

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const buildRoundsCheckNumber = (type, minNumber = 2, maxNumber = 30, roundsCount = attempts) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = generateRandomNumber(minNumber, maxNumber);

    if (type === 'prime') {
      // check if number is prime
      rounds.push([`${number}`, isPrimeNumber(number) ? 'yes' : 'no']);
    } else {
      // check if number is even
      rounds.push([`${number}`, isEvenNumber(number) ? 'yes' : 'no']);
    }
  }

  return rounds;
};

export default buildRoundsCheckNumber;
