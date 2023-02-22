import readlineSync from 'readline-sync';

const greetingWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

const greetingUser = (userName) => {
  console.log(`Hello, ${userName}!`);
};

const getUserName = () => readlineSync.question('May I have your name? ');

const greeting = () => {
  greetingWelcome();

  const name = getUserName();
  greetingUser(name);

  return name;
};

export default greeting;
