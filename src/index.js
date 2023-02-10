import readlineSync from 'readline-sync';

const attempts = 3;

const generateRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);

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

const calcGCD = (a, b) => {
    const min = a <= b ? a : b;
    for (let i = min; i >= 1; i -= 1) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }

    return 1;
};

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
    generateRandomSign,
    calcGCD,
    gameQuestion,
    gameComplete,
};
