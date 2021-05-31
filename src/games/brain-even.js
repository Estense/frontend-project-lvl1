import _ from 'lodash';
import generateGame from '../index.js';

const gameDescription = 'Answer "yes" if number is even, otherwise answer "no"';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getData = () => {
  const randomNum = _.random(1, 100);
  const rightAnswer = isEven(randomNum);
  return [rightAnswer, randomNum];
};

const brainEven = () => generateGame(gameDescription, getData);
export default brainEven;
