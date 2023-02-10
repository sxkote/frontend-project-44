#!/usr/bin/env node

import greeting from '../src/cli.js';
import {
    attempts,
    gameComplete,
    gameQuestion,
    generateRandomNumber,
    generateRandomSign,
} from '../src/index.js';

// START THE GAME
const username = greeting();

console.log('What is the result of the expression?');

let isCompleted = true;

for (let i = 0; i < attempts; i += 1) {
    const number1 = generateRandomNumber(10, 100);
    const number2 = generateRandomNumber(1, 10);
    const sign = generateRandomSign();

    // define correct answer
    let correct = '0';
    switch (sign) {
    case '*': {
        correct = number1 * number2;
        break;
    }
    case '-': {
        correct = number1 - number2;
        break;
    }
    default: {
        correct = number1 + number2;
        break;
    }
    }
    correct = correct.toString();

    isCompleted = gameQuestion(`${number1} ${sign} ${number2}`, correct);
    if (!isCompleted) {
        break;
    }
}

gameComplete(isCompleted, username);
