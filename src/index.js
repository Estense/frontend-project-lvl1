import readlineSync from 'readline-sync';

// Games engine
const roundsToWin = 3;
const generateGame = (gameDescription, getData) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);
  for (let i = 0; i < roundsToWin; i += 1) {
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
