#!/usr/bin/env node

import greeting from '../src/cli.js';
import {
  attempts,
  gameComplete,
  gameQuestion,
  generateRandomNumber,
} from '../src/index.js';

// START THE GAME
const username = greeting();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let isCompleted = true;
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < attempts; i += 1) {
  const number = generateRandomNumber(2, 20);
  const correct = isPrime(number) ? 'yes' : 'no';
  isCompleted = gameQuestion(number, correct);
  if (!isCompleted) {
    break;
  }
}

gameComplete(isCompleted, username);
