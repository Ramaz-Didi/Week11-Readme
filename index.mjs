import inquirer from 'inquirer';
import fs from "fs/promises"
const licenseArray = ['Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License',
'(https://img.shields.io/badge/License-Apache_2.0-blue.svg)','(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)','(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
'(https://opensource.org/licenses/Apache-2.0)','(https://www.boost.org/LICENSE_1_0.txt)','(https://opensource.org/licenses/BSD-3-Clause)'];

// '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
// '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
// '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'];


let {title,description,installation,usage,contributing,tests,license,gitHub,email} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Please, enter The title of your project",
        },
        {
            type: 'input',
            name: 'description',
            message: "Please, describe your project",
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
            name: 'test',
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
            message: "Please enter your email",
        },
    ])
    const licenseNumber = licenseArray.findIndex(element => element == license);
    const badge ="![License]"+licenseArray[licenseNumber+3]
    const badgeUrl =licenseArray[licenseNumber+6]
        // GitHub username-link to their GitHub profile 
        // email address  how to reach them with additional questions
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
#top

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
### *Test*
>  *${tests}*
<br />
### *Questions*
>  for more information please check GitHub repository *${gitHub}*<br />
 also for further details please do not hesitate to contact on *${email}*
<br />
 
[go to top](#top)
      
     `

    await fs.writeFile("README-TEMPLATE.md", htmlDocument)

    console.log("success!")