import readlineSync from 'readline-sync';
import sayHello from './cli.js';

// Games engine
const roundCounter = 3;
const generateGame = (gameDescription, getData) => {
  const playerName = sayHello();
  console.log(gameDescription);
  for (let i = 0; i < roundCounter; i += 1) {
    const [rightAnswer, questionBody] = getData();
    const answer = readlineSync.question(`Question: ${questionBody}\n`);
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer, right answer was '${rightAnswer}'\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default generateGame;
