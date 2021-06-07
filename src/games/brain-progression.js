import _ from 'lodash';
import generateGame from '../index.js';

export const gameDescription = 'What number is missing in the progression?';

const makeProgression = (length, step, num1) => {
  const result = [];
  let operand = num1;
  for (let i = 0; i < length; i += 1) {
    operand += step;
    result.push(operand);
  }
  return result;
};

const hideElement = (prog, index) => {
  const arr = prog;
  arr[index] = '..';
  return arr.join(' ');
};

export const getData = () => {
  const step = _.random(1, 10);
  const num1 = _.random(1, 100);
  const length = _.random(5, 9);
  const index = _.random(0, length - 1);
  const prog = makeProgression(length, step, num1);
  const rightAnswer = prog[index].toString();
  const progression = hideElement(prog, index);
  return [rightAnswer, progression];
};

export default () => generateGame(gameDescription, getData);
