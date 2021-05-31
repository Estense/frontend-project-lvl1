import readlineSync from 'readline-sync';

const askPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  return playerName;
};

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = askPlayerName()
  console.log(`Hello, ${name}!`);
  return name;
};

export default sayHello;
