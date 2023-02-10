#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

// DEFAULTS & HELPERS
const attempts = 3;
const makeErrorMessage = (answer, correct) => `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`;
const makeRandom = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);

// START THE GAME
const username = greeting();

// Game Info
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let isCompleted = true;

for (let i = 0; i < attempts; i += 1) {
    const number = makeRandom();
    console.log(`Question: ${number}`);

    // get answer from console
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(makeErrorMessage(userAnswer, correctAnswer));
        isCompleted = false;
        break;
    }
}

if (isCompleted) {
    console.log(`Congratulations, ${username}!`);
} else {
    console.log(`Let's try again, ${username}!`);
}
