import { attempts, buildRoundsForNumbers } from '../utils.js';
import playGame from '../engine.js';

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const buildRoundsPrime = (minNumber = 2, maxNumber = 30, roundsCount = attempts) => {
  const checkNumberFunction = isPrimeNumber;
  return buildRoundsForNumbers(checkNumberFunction, minNumber, maxNumber, roundsCount);
};

const playGamePrime = (roundsCount = attempts) => {
  const rounds = buildRoundsPrime(roundsCount);

  return playGame('Answer "yes" if given number is prime. Otherwise answer "no".', rounds);
};

export default playGamePrime;
