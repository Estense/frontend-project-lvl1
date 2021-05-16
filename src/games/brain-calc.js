import _ from 'lodash';
import game from '../index.js';

export const gameRules = 'What is the result of the expression?';
export const gameData = () => {
  const symbols = ['+', '-', '*'];
  const randomSymbol = _.random(0, 2);
  const num1 = _.random(1, 10);
  const num2 = _.random(1, 10);
  const randomNum = `${num1} ${symbols[randomSymbol]} ${num2}`;
  let rightAnswer = 0;
  switch (randomSymbol) {
    case 0:
      rightAnswer = num1 + num2;
      break;
    case 1:
      rightAnswer = num1 - num2;
      break;
    default:
      rightAnswer = num1 * num2;
  }
  const arr = [rightAnswer.toString(), randomNum];
  return arr;
};

const brainCalc = () => game(gameRules, gameData);
export default brainCalc;
