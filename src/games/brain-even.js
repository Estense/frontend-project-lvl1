import _ from 'lodash';
import game from '../index.js';

const gameRules = 'Answer "yes" if number is even, otherwise answer "no"';
const gameData = () => {
  let rightAnswer = 'no';
  const randomNum = _.random(1, 100);
  if (randomNum % 2 === 0) {
    rightAnswer = 'yes';
  }
  const arr = [rightAnswer, randomNum];
  return arr;
};
const brainEven = () => game(gameRules, gameData);
export default brainEven;
