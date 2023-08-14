// Include packages needed for this application
const inquirer = require("inquirer"); // Old import method
// import inquirer from "inquirer"; // New method per docs
const fs = require("fs"); // File system access

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the project title?"
  },
  {
    name: "description",
    type: "input",
    message: "What is the project description?"
  },

  {
    name: "installation",
    type: "input",
    message: "Enter the installation instructions"
  },

  {
    name: "usage",
    type: "input",
    message: "what is your projects usage?"
  },

  {
    name: "contributing",
    type: "input",
    message: "What are the contribution guidelines?"
  },

  {
    name: "license",
    type: "list",
    message: "what is you licencse?",
    choices: [
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0U',
      'General Public License v2.0',
      'GNU Lesser General Public License v2.1',
      'Mozilla Public License 2.0',
    ]
  },

  {
    name: "test",
    type: "input",
    message: "what is the test?"
  },

  {
    name: "githubUsername",
    type: "input",
    message: "what is your username?"
  },

  {
    name: "email",
    type: "input",
    message: "what is you email?"
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  // Write the file...
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
    }
  });

}

// TODO: Create a function to initialize app
function init() {

  // Ask the questions....
  inquirer
    .prompt(questions)

    .then((answers) => {

      // Place a badge/image at the top of the document depending on the chosen license....
      let text = `![${answers.license} badge]`
      if (answers.license == "Apache License 2.0") {
        text += "(https://www.opensourcecms.com/wp-content/uploads/apache-license.gif) \n"
      } else if (answers.license == "GNU General Public License v3.0") {
        text += "(https://www.gnu.org/graphics/gplv3-with-text-136x68.png) \n"
      } else if (answers.license == "MIT License") {
        text += "(https://dbatools.io/wp-content/uploads/2018/03/img_5a9af637b5a66-full.png?ssl=1) \n"
      } else if (answers.license.startsWith("BSD")) {
        text += "(https://upload.wikimedia.org/wikipedia/commons/b/bf/License_icon-bsd.svg) \n"
      } else if (answers.license == "Boost Software License 1.0") {
        text += "(https://upload.wikimedia.org/wikipedia/commons/c/cd/Boost.png) \n"
      } else if (answers.license == "Creative Commons Zero v1.0 Universal") {
        text += "(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQneBKbyQdHqUguEMCKJ7xreHCtSkbX_VU3fQt_JGreaR2Nc7_nZD-ervA_NvfuziVGA&usqp=CAU) \n"
      } else if (answers.license == "Eclipse Public License 2.0") {
        text = "<img src='https://i0.wp.com/www.plat4om.com/wp-content/uploads/2021/08/eclipse-logo-new_story.jpg?fit=760%2C475&ssl=1' width='200px'> \n\n"
      } else if (answers.license == "GNU Affero General Public License v3.0U") {
        text += "(https://blog.tooljet.com/content/images/size/w300/2021/09/1200px-AGPLv3_Logo.png) \n"
      } else if (answers.license == "General Public License v2.0") {
        //text += "(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/LGPLv3_Logo.svg/1200px-LGPLv3_Logo.svg.png) \n"
        text = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/LGPLv3_Logo.svg/1200px-LGPLv3_Logo.svg.png' width='25%' height='25%'> \n\n"
      } else if (answers.license == "GNU Lesser General Public License v2.1") {
        text += "(https://www.gnu.org/graphics/heckert_gnu.transp.small.png) \n"
      } else if (answers.license == "Mozilla Public License 2.0") {
        text = "<img src = 'https://i.ytimg.com/vi/Twfi_npMbeY/maxresdefault.jpg' width = '25%' height = '25%'> \n\n"
      }




      // Construct a string from the answers....
      text += `# ${answers.title} #\n\n`

      text += "## TABLE OF CONTENTS ##\n"
      // TOC will contain links to other sections in the readme....
      text += "- [Description](#description)\n"
      text += "- [Installation](#installation)\n"
      text += "- [Usage](#usage)\n"
      text += "- [Contributing](#usage)\n"
      text += "- [License](#license)\n"
      text += "- [Test](#test)\n"
      text += "- [Questions](#questions)\n"

      text += "## DESCRIPTION ##\n"
      text += answers.description + "\n"

      text += "## INSTALLATION ##\n"
      text += answers.installation + "\n"

      text += "## USAGE ##\n"
      text += answers.usage + "\n"

      text += "## CONTRIBUTING ##\n"
      text += answers.contributing + "\n"

      text += "## LICENSE ##\n"
      text += answers.license + "\n"

      text += "## TEST ##\n"
      text += answers.test + "\n"

      text += "## QUESTIONS ##\n"
      let githublink = "https://github.com/" + answers.githubUsername
      text += `Github user name: [${answers.githubUsername}](${githublink})   \n`
      text += `For any additional questions, please EMAIL me at: [${answers.email}](mailto:${answers.email})\n`

      // Write the string to the MD file....
      writeToFile("README.md", text);

    })


    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

}

// Function call to initialize app
init();

// DONE GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// DONE THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// DONE WHEN I enter my project title
// THEN this is displayed as the title of the README

// DONE WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// DONE
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// DONE
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// DONE
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// DONE
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
