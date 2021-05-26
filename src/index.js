import readlineSync from 'readline-sync';

// Games engine
const gameCounter = 3;
const generateGame = (gameDescription, getData) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(gameDescription);
  let counter = 0;
  while (counter < gameCounter) {
    const data = getData();
    const [rightAnswer, randomNum] = data;
    const answer = readlineSync.question(`Question: ${randomNum}\n`);
    if (answer === rightAnswer) {
      counter += 1;
    } else {
      return `'${answer}' is wrong answer, right answer was '${rightAnswer}'\nLet's try again ${playerName}.`;
    }
  }
  return `Congratulations ${playerName}`;
};

export default generateGame;
