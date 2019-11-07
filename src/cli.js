import "core-js/stable";
import "regenerator-runtime/runtime";

import start from "./1_start";
import greeting from "./2_greeting";
import welcome from "./3_welcome.js";
import home from "./4_home";

import dir from "./commands/dir";
import help from "./commands/help";

const cli = async () => {
  const name = await start();
  await greeting(name);
  await welcome();
  const command = await home(name);
  const commands = {
    dir,
    help,
    ls: dir
  };
  commands[command]();
};

export default cli;
