import { attempts, buildRoundsForNumbers } from '../utils.js';
import playGame from '../engine.js';

const isEvenNumber = (number) => number % 2 === 0;

const buildRoundsEven = (minNumber = 2, maxNumber = 30, roundsCount = attempts) => {
  const checkNumberFunction = isEvenNumber;
  return buildRoundsForNumbers(checkNumberFunction, minNumber, maxNumber, roundsCount);
};

const playGameEven = (roundsCount = attempts) => {
  const rounds = buildRoundsEven(roundsCount);

  return playGame('Answer "yes" if the number is even, otherwise answer "no".', rounds);
};

export default playGameEven;
