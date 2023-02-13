#!/usr/bin/env node

import buildRoundsPrime from '../src/games/brain-prime.js';
import playGame from '../src/engine.js';

const rounds = buildRoundsPrime();

playGame('Answer "yes" if given number is prime. Otherwise answer "no".', rounds);
