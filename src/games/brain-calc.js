import _ from 'lodash';
import generateGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const getRightAnswer = (randomSymbol, first, last, symbols) => {
  let rightAnswer = 0;
  switch (randomSymbol) {
    case 0:
      rightAnswer = first + last;
      break;
    case 1:
      rightAnswer = first - last;
      break;
    case 2:
      rightAnswer = first * last;
      break;
    default:
      throw new Error(`Unknown expression: '${symbols[randomSymbol]}'!`);
  }
  return rightAnswer;
};

const getData = () => {
  const symbols = ['+', '-', '*'];
  const randomSymbol = _.random(0, symbols.length - 1);
  const num1 = _.random(1, 10);
  const num2 = _.random(1, 10);
  const expression = `${num1} ${symbols[randomSymbol]} ${num2}`;
  const rightAnswer = getRightAnswer(randomSymbol, num1, num2, symbols);

  return [rightAnswer.toString(), expression];
};

const brainCalc = () => generateGame(gameDescription, getData);
export default brainCalc;
