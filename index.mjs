import inquirer from 'inquirer';
import fs from "fs/promises"
const licenseArray = ['Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License',
'(https://img.shields.io/badge/License-Apache_2.0-blue.svg)','(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)','(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
'(https://opensource.org/licenses/Apache-2.0)','(https://www.boost.org/LICENSE_1_0.txt)','(https://opensource.org/licenses/BSD-3-Clause)'];

// ------------Data input --------------

let {title,description,installation,usage,contributing,tests,license,gitHub,email} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Please, enter The title of your project",
            validate: (answer) => {
                if (answer == ''){
                    return 'Please enter project title'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Please, describe your project",
            validate: (answer) => {
                if (answer == ''){
                    return 'Please, describe your project'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please, take us through the installation process",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Please indicate what is the usage purpose",
        },
        {

            type: 'input',
            name: 'contributing',
            message: "Please indicate contribution guidelines",
        },
        {

            type: 'input',
            name: 'tests',
            message: "Please indicate test instructions",
        },
        {

            type: 'list',
            name: 'license',
            message: "Please indicate which Licenses can be applied",
            choices:[licenseArray[0],licenseArray[1],licenseArray[2]],
        },
        {
            type: 'input',
            name: 'gitHub', //username -Questions
            message: "Please enter your GitHub link",
        },
        {
            type: 'input',
            name: 'email', //email -Questions
            // name: 'email', //email -Questions
            message: "Please enter your email",
        },

    ])
  
    const licenseNumber = licenseArray.findIndex(element => element == license);
    const badge ="![License]"+licenseArray[licenseNumber+3]
    const badgeUrl =licenseArray[licenseNumber+6]
  
  let htmlDocument =  `
  
  # ${ title} <br />
  ${badge}
  ## *Description*
  **${description}**
  
  ## Table of Contents 
- [Installation](#installation)<br />
- [Usage](#usage)<br />
- [License](#license)<br />
- [Contribution](#contribution)<br />
- [Tests](#test)<br /> 
- [Questions](#questions)<br />

### *Installation*
> ${"*"+installation+"*"}
<br />
### *Usage*
> *${usage}*
<br />
### *License*
> Please see license link  *[${license}]*${badgeUrl}
<br />
### *Contribution*
>  *${contributing}*
<br />
### *Tests*
>  *${tests}*
<br />
### *Questions*
>  for more information please check GitHub repository *${gitHub}*<br />
 also for further details please do not hesitate to contact on *${email}*
<br />
 
[go back to Description](#description)
      
     `

    await fs.writeFile("README-SAMPLE.md", htmlDocument)

    console.log("success!")