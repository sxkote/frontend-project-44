import { attempts, generateRandomNumber } from '../utils.js';
import playGame from '../engine.js';

const generateRandomSign = () => {
  const signNumber = generateRandomNumber(1, 100);

  if (signNumber >= 66) {
    return '*';
  }
  if (signNumber >= 33) {
    return '-';
  }

  return '+';
};

const calculateExpression = (number1, sign, number2) => {
  switch (sign) {
    case '*': {
      return number1 * number2;
    }
    case '-': {
      return number1 - number2;
    }
    default: {
      return number1 + number2;
    }
  }
};

const buildRoundsCalc = (roundsCount = attempts) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = generateRandomNumber(10, 100);
    const number2 = generateRandomNumber(1, 10);
    const sign = generateRandomSign();
    const value = calculateExpression(number1, sign, number2);

    rounds.push([`${number1} ${sign} ${number2}`, value.toString()]);
  }

  return rounds;
};

const playGameCalc = (roundsCount = attempts) => {
  const rounds = buildRoundsCalc(roundsCount);

  return playGame('What is the result of the expression?', rounds);
};

export default playGameCalc;
