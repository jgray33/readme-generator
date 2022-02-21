let inquirer = require('inquirer');
const fs = require("fs")

const generateReadme = ({title, description, installation, usage, license, contributors, testInstructions, gitHub, email}) =>
`
# ${title} 

## Description
${description} 

${licenseBadge}

### Table of contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

<a name="installation"></a>
#### Installation 
${installation}


<a name="usage"></a>
#### Usage 
${usage}


<a name="license"></a>
#### License 
${license}


<a name="contributors"></a>
#### Contributors 
${contributors}

<a name="tests"></a>
#### Tests 
${testInstructions}

<a name="questions"></a>
##### Questions

If you have any questions, visit my [GitHub profile](www.github.com/${gitHub}) or email me: ${email} 


`



inquirer
  .prompt([ 
      {
    type:"input",
    name:"title",
    message:"What is the title of your project?",
      },
      {
    type:"input",
    name:"description",
    message:"How would you describe your project?",
      },
      {
    type:"input",
    name:"installation",
    message:"Describe how you would install your project?",
      },
      {
    type:"input",
    name:"usage",
    message:"How do you use the project?",
      },
      {
    type:"list",
    name:"license",
    message:"what about a license?",
    choices:["MIT","GPLv2","Apache","GPLv3","BSD 3-clause","Unlicense"]
      },
      {
    type:"input",
    name:"contributors",
    message:"Who are the other contributors to this project?",
      },
      {
    type:"input",
    name:"testInstructions",
    message:"What are the test instructions?",
      },
      {
    type:"input",
    name:"gitHub",
    message:"What is your GitHub user name?",
      },
      {
    type:"input",
    name:"email",
    message:"What is your email address?",
      },

  ])
  .then((answers) => {
    console.log(answers)
    let readMePageContent = generateReadme(answers)

    fs.writeFile("README.md", readMePageContent, (err) => 
    err ? console.log(err): console.log("Read me generated"))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



  // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(answers.license) {
        case "MIT":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        case "GPLv2":
            licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
            break;
        case "Apache":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break
        case "GPLv3":
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            break
        case "BSD 3-clause":
            licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
            break
        case "Unlicense":
            licenseBadge = ""
                }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
