#!/usr/bin/env node

import playGame from '../src/engine.js';
import buildRoundsEven from '../src/games/brain-even.js';

const rounds = buildRoundsEven();

playGame('Answer "yes" if the number is even, otherwise answer "no".', rounds);
