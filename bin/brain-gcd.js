#!/usr/bin/env node

import greeting from '../src/cli.js';
import {
    attempts,
    gameComplete,
    gameQuestion,
    generateRandomNumber,
    calcGCD,
} from '../src/index.js';

// START THE GAME
const username = greeting();

console.log('Find the greatest common divisor of given numbers.');

let isCompleted = true;

for (let i = 0; i < attempts; i += 1) {
    const number1 = generateRandomNumber(2, 30);
    const number2 = generateRandomNumber(2, 30);
    const correct = calcGCD(number1, number2).toString();

    isCompleted = gameQuestion(`${number1} ${number2}`, correct);
    if (!isCompleted) {
        break;
    }
}

gameComplete(isCompleted, username);
