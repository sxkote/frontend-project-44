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

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let isCompleted = true;

for (let i = 0; i < attempts; i += 1) {
    const number = generateRandomNumber();
    const correct = (number % 2 === 0) ? 'yes' : 'no';
    isCompleted = gameQuestion(number, correct);
    if (!isCompleted) {
        break;
    }
}

gameComplete(isCompleted, username);
