import _ from 'lodash';
import game from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameData = () => {
  const num = _.random(0, 1000);
  let rightAnswer = 'yes';
  if ((num === 1) || (num === 0)) {
    rightAnswer = 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      rightAnswer = 'no';
    }
  }
  const arr = [rightAnswer.toString(), num];
  return arr;
};

const brainPrime = () => game(gameRules, gameData);
export default brainPrime;
