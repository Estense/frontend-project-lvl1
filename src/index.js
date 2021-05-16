import readlineSync from 'readline-sync';

// Games engine
const game = (gameRules, gameData) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(gameRules);
  let counter = 0;
  while (counter < 3) {
    const data = gameData();
    const [rightAnswer, randomNum] = data;
    const answer = readlineSync.question(`Question: ${randomNum}\n`);
    if (answer === rightAnswer) {
      counter += 1;
    } else {
      return console.log(`'${answer}' is wrong answer, right answer was '${rightAnswer}'\nLet's try again ${playerName}.`);
    }
  }
  return console.log(`Congratulations ${playerName}`);
};

export default game;
