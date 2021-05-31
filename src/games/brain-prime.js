import _ from 'lodash';
import generateGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getData = () => {
  const num = _.random(0, 1000);
  const rightAnswer = isPrime(num);
  return [rightAnswer.toString(), num];
};

const brainPrime = () => generateGame(gameDescription, getData);
export default brainPrime;
