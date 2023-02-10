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

console.log('What number is missing in the progression?');

let isCompleted = true;
const arrayLength = 10;
const generateArray = (init, add) => {
    const array = [];
    for (let i = 0; i < arrayLength; i += 1) {
        array.push((init + add * i).toString());
    }
    return array;
};

for (let i = 0; i < attempts; i += 1) {
    const numberInit = generateRandomNumber(1, 5);
    const numberAdd = generateRandomNumber(2, 6);

    const array = generateArray(numberInit, numberAdd);

    const numberIndex = generateRandomNumber(0, arrayLength - 1);
    const correct = array[numberIndex];
    array[numberIndex] = '..';

    const message = array.join(' ');

    isCompleted = gameQuestion(message, correct);
    if (!isCompleted) {
        break;
    }
}

gameComplete(isCompleted, username);
