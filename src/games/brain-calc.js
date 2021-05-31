import _ from 'lodash';
import generateGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const getRightAnswer = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown expression: '${operator}'!`);
  }
};

const getData = () => {
  const symbols = ['+', '-', '*'];
  const randomSymbol = _.sample(symbols);
  const operand1 = _.random(1, 10);
  const operand2 = _.random(1, 10);
  const expression = `${operand1} ${randomSymbol} ${operand2}`;
  const rightAnswer = getRightAnswer(randomSymbol, operand1, operand2).toString();
  return [rightAnswer, expression];
};

const brainCalc = () => generateGame(gameDescription, getData);
export default brainCalc;
