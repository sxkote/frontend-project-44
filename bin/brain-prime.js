#!/usr/bin/env node

import buildRoundsCheckNumber from '../src/games/brain-numbers.js';
import playGame from '../src/engine.js';

const rounds = buildRoundsCheckNumber('prime', 2, 30);

playGame('Answer "yes" if given number is prime. Otherwise answer "no".', rounds);
