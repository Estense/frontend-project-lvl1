import _ from 'lodash';
import generateGame from '../index.js';

export const gameDescription = 'What number is missing in the progression?';

const makeProgression = (length) => {
  const step = _.random(1, 10);
  let num1 = _.random(1, 100);
  const result = [];
  for (let i = 0; i < length; i += 1) {
    num1 += step;
    result.push(num1);
  }
  return result;
};

export const getData = () => {
  const length = _.random(5, 9);
  const num2 = _.random(0, length - 1);
  const prog = makeProgression(length);
  const rightAnswer = prog[num2];
  prog[num2] = '..';
  const randomNum = prog.join(' ');
  return [rightAnswer.toString(), randomNum];
};

const brainProgression = () => generateGame(gameDescription, getData);
export default brainProgression;
