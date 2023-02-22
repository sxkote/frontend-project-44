const attempts = 3;

const generateRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);

const buildRoundsForNumbers = (checkNumberFunc, minNumber, maxNumber, roundsCount) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = generateRandomNumber(minNumber, maxNumber);

    rounds.push([`${number}`, checkNumberFunc(number) ? 'yes' : 'no']);
  }

  return rounds;
};

export {
  attempts,
  generateRandomNumber,
  buildRoundsForNumbers,
};
