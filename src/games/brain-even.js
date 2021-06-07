import _ from 'lodash';
import generateGame from '../index.js';

const gameDescription = 'Answer "yes" if number is even, otherwise answer "no"';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getData = () => {
  const randomNum = _.random(1, 100);
  const rightAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [rightAnswer, randomNum];
};

export default () => generateGame(gameDescription, getData);
