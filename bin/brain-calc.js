#!/usr/bin/env node

import buildRoundsCalc from '../src/games/brain-calc.js';
import playGame from '../src/engine.js';

const rounds = buildRoundsCalc();

playGame('What is the result of the expression?', rounds);
