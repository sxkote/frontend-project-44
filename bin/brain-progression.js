#!/usr/bin/env node

import buildRoundsProgression from '../src/games/brain-progression.js';
import playGame from '../src/engine.js';

const rounds = buildRoundsProgression();

playGame('What number is missing in the progression?', rounds);
