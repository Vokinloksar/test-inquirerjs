var cp = require("child_process");
var inquirer = require("inquirer");
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
    let ls = cp.spawnSync("vue", ["create", "."], {
      stdio: "inherit"
    });
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
