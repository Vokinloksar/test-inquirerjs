var spawnSync = require("child_process").spawnSync;
var inquirer = require("inquirer");
var stream = require("stream");
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "confirm",
      name: "toBeDelivered",
      message: "Proceed with cli?",
      default: true
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    let ls = spawnSync("node", ["cli.js"], {
      stdio: "inherit"
    });
    // ls.stdout.on("data", data => {
    //   console.log(`${data}`);
    // });

    // ls.stderr.on("data", data => {
    //   console.error(`stderr: ${data}`);
    // });

    // ls.on("close", code => {
    //   console.log(`child process exited with code ${code}`);
    // });
    return;
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      // consol
      console.log(error);
    } else {
      // Something else when wrong
      console.log(error);
    }
  });
