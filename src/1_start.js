import inquirer from "inquirer";
import clear from "clear";

const start = () =>
  new Promise(resolve => {
    clear();

    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Who are you?"
        }
      ])
      .then(answers => {
        resolve(answers.name);
      });
  });

export default start;
