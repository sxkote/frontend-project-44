import { attempts, generateRandomNumber } from '../utils.js';
import playGame from '../engine.js';

const calculateGCD = (a, b) => {
  const min = a <= b ? a : b;
  for (let i = min; i >= 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }

  return 1;
};

const buildRoundsGcd = (roundsCount = attempts) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = generateRandomNumber(2, 30);
    const number2 = generateRandomNumber(2, 30);
    const gcd = calculateGCD(number1, number2).toString();

    rounds.push([`${number1} ${number2}`, gcd.toString()]);
  }

  return rounds;
};

const playGameGcd = (roundsCount = attempts) => {
  const rounds = buildRoundsGcd(roundsCount);

  return playGame('Find the greatest common divisor of given numbers.', rounds);
};

export default playGameGcd;
