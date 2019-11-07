import "core-js/stable";
import "regenerator-runtime/runtime";
import clear from "clear";

import start from "./1_start";
import greeting from "./2_greeting";

const cli = async () => {
  const name = await start();
  await greeting(name);
};

export default cli;
