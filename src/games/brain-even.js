import { attempts, generateRandomNumber } from '../index.js';

const isEvenNumber = (number) => number % 2 === 0;

const buildRoundsEven = (roundsCount = attempts) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = generateRandomNumber(1, 100);
    rounds.push([`${number}`, isEvenNumber(number) ? 'yes' : 'no']);
  }

  return rounds;
};

export default buildRoundsEven;
