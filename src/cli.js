import readlineSync from 'readline-sync';

export const playerName = readlineSync.question('May I have your name? ');

export const sayHello = () => console.log(`Hello, ${playerName}!`);
