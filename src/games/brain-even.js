import _ from 'lodash';
import generateGame from '../index.js';

const gameDescription = 'Answer "yes" if number is even, otherwise answer "no"';
const getData = () => {
  let rightAnswer = 'no';
  const randomNum = _.random(1, 100);
  if (randomNum % 2 === 0) {
    rightAnswer = 'yes';
  }
  return [rightAnswer, randomNum];
};
const brainEven = () => generateGame(gameDescription, getData);
export default brainEven;
