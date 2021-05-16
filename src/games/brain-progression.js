import _ from 'lodash';
import game from '../index.js';

export const gameRules = 'What number is missing in the progression?';
export const gameData = () => {
  const step = _.random(1, 10);
  let num1 = _.random(1, 100);
  const length = _.random(5, 9);
  const num2 = _.random(0, length);
  const result = [];
  let rightAnswer = 0;
  for (let i = 0; i < length; i += 1) {
    num1 += step;
    result.push(num1);
  }
  rightAnswer = result[num2];
  result[num2] = '..';
  const randomNum = result.join(' ');
  const arr = [rightAnswer.toString(), randomNum];
  return arr;
};

const brainProgression = () => game(gameRules, gameData);
export default brainProgression;
