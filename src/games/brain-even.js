import { attempts, generateRandomNumber } from '../utils.js';
import playGame from '../engine.js';

const isEvenNumber = (number) => number % 2 === 0;

const buildRoundsEven = (minNumber = 2, maxNumber = 30, roundsCount = attempts) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = generateRandomNumber(minNumber, maxNumber);

    rounds.push([`${number}`, isEvenNumber(number) ? 'yes' : 'no']);
  }

  return rounds;
};

const playGameEven = (roundsCount = attempts) => {
  const rounds = buildRoundsEven(roundsCount);

  return playGame('Answer "yes" if the number is even, otherwise answer "no".', rounds);
};

export default playGameEven;
