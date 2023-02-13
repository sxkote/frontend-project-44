#!/usr/bin/env node

import playGame from '../src/engine.js';
import buildRoundsGcd from '../src/games/brain-gcd.js';

const rounds = buildRoundsGcd();

playGame('Find the greatest common divisor of given numbers.', rounds);
