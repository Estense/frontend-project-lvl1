import _ from 'lodash';
import generateGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGreatesDividor = (operand1, operand2) => {
  let result = 0;
  const counter = operand2 > operand1 ? operand2 : operand1;
  for (let i = 1; i <= counter; i += 1) {
    if ((operand1 % i === 0) && (operand2 % i === 0)) {
      result = i;
    }
  }
  return result;
};

const getData = () => {
  const num1 = _.random(1, 100);
  const num2 = _.random(1, 100);
  const operands = `${num1} ${num2}`;
  const rightAnswer = findGreatesDividor(num1, num2).toString();
  return [rightAnswer, operands];
};

const brainGcd = () => generateGame(gameDescription, getData);
export default brainGcd;
