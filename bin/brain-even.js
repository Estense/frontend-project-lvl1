#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { playerName, sayHello } from '../src/cli.js';

const isitEven = () => {
  let counter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (counter < 3) {
    let rightAnswer = 'No';
    const randomNum = Math.round(Math.random() * 100);
    if (randomNum % 2 === 0) {
      rightAnswer = 'Yes';
    }
    const answer = readlineSync.question(`Question: ${randomNum}\n`);
    if (answer.toLowerCase() === rightAnswer.toLowerCase()) {
      counter += 1;
      console.log('Correct!');
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again ${playerName}`);
    }
  }
  return console.log(`Congratulations ${playerName}!`);
};
console.log('Welcome to the Brain Games!');
sayHello();
isitEven();
