import _ from 'lodash';
import generateGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGreatesDividor = (operand1, operand2) => {
  const counter = operand2 > operand1 ? operand2 : operand1;
  for (let i = counter; i > 0; i -= 1) {
    if ((operand1 % i === 0) && (operand2 % i === 0)) {
      return i;
    }
  }
  return new Error('Given numbers is incorrect!');
};

const getData = () => {
  const num1 = _.random(1, 100);
  const num2 = _.random(1, 100);
  const operands = `${num1} ${num2}`;
  const rightAnswer = findGreatesDividor(num1, num2).toString();
  return [rightAnswer, operands];
};

export default () => generateGame(gameDescription, getData);
