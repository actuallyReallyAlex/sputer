import clear from "clear";
import chalk from "chalk";

const welcome = () =>
  new Promise(resolve => {
    clear();
    console.log(`Welcome to ${chalk.redBright("sputer")}.`);
    resolve();
  });

export default welcome;
