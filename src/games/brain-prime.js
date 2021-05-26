import _ from 'lodash';
import generateGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getData = () => {
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
  return [rightAnswer.toString(), num];
};

const brainPrime = () => generateGame(gameDescription, getData);
export default brainPrime;
