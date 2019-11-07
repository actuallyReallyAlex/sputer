import inquirer from "inquirer";
import clear from "clear";

const home = name =>
  new Promise(resolve => {
    clear();

    inquirer
      .prompt([
        {
          type: "input",
          name: "command",
          message: " ",
          prefix: `${name}@sputer`
        }
      ])
      .then(answers => {
        resolve(answers.command);
      });
  });

export default home;
