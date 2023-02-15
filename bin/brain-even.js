#!/usr/bin/env node

import buildRoundsCheckNumber from '../src/games/brain-numbers.js';
import playGame from '../src/engine.js';

const rounds = buildRoundsCheckNumber('even', 2, 100);

playGame('Answer "yes" if the number is even, otherwise answer "no".', rounds);
