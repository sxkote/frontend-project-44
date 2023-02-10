import readlineSync from 'readline-sync';

const attempts = 3;

const generateRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);

const gameQuestion = (message, correct) => {
    // display question
    console.log(`Question: ${message}`);

    // get answer from console
    const answer = readlineSync.question('Your answer: ');

    // process the answer
    if (answer === correct) {
        console.log('Correct!');
        return true;
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    return false;
};

const gameComplete = (isCompleted, name) => {
    if (isCompleted) {
        console.log(`Congratulations, ${name}!`);
    } else {
        console.log(`Let's try again, ${name}!`);
    }
};

export {
    attempts,
    generateRandomNumber,
    gameQuestion,
    gameComplete,
};
