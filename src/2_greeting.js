import clear from "clear";

const greeting = name =>
  new Promise(resolve => {
    const message = `Hello, ${name} `;
    let times = 0;

    const messageInterval = setInterval(() => {
      const dots = {
        0: ".",
        1: "..",
        2: "..."
      };
      if (times === 3) {
        setTimeout(() => {
          clearInterval(messageInterval);
          resolve();
        }, 1000);
      } else {
        clear();
        console.log(message + dots[times]);
        times++;
      }
    }, 1000);
  });

export default greeting;
