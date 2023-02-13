import { attempts, generateRandomNumber } from '../index.js';

const progressionLength = 10;

const generateProgressionArray = (startValue, addValue, arrayLength = progressionLength) => {
  const array = [];
  for (let i = 0; i < arrayLength; i += 1) {
    array.push((startValue + addValue * i).toString());
  }
  return array;
};

const buildRoundsProgression = (roundsCount = attempts) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const startValue = generateRandomNumber(1, 5);
    const addValue = generateRandomNumber(2, 6);

    const progression = generateProgressionArray(startValue, addValue, progressionLength);

    const randomProgressionIndex = generateRandomNumber(0, progression.length - 1);
    const randomProgressionValue = progression[randomProgressionIndex];
    progression[randomProgressionIndex] = '..';

    rounds.push([progression.join(' '), randomProgressionValue]);
  }

  return rounds;
};

export default buildRoundsProgression;
