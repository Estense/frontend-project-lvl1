import _ from 'lodash';
import generateGame from '../index.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';
export const getData = () => {
  const num1 = _.random(1, 100);
  const num2 = _.random(1, 100);
  const randomNum = `${num1} ${num2}`;
  let counter = num2;
  let rightAnswer = 1;
  if (num2 > num1) {
    counter = num1;
  }
  for (let i = 1; i <= counter; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      rightAnswer = i;
    }
  }
  return [rightAnswer.toString(), randomNum];
};

const brainGcd = () => generateGame(gameDescription, getData);
export default brainGcd;
