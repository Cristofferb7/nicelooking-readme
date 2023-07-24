// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'Apache 2.0 License'){
 return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' 
}
else if  (license === 'Boost Software License 1.0'){
  return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
}

else if  (license === 'BSD 3-Clause License'){
  return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
}

else if  (license === 'ISC License (ISC)'){
  return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
}

else if (license === 'none'){
return ''
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0 License'){
 return 'https://opensource.org/licenses/Apache-2.0' 
}
else if  (license === 'Boost Software License 1.0'){
  return 'https://www.boost.org/LICENSE_1_0.txt'
}

else if  (license === 'BSD 3-Clause License'){
  return 'https://opensource.org/licenses/BSD-3-Clause'
}

else if  (license === 'ISC License (ISC)'){
  return 'https://opensource.org/licenses/ISC'
}

else if (license === 'none'){
return ''
}

}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}  

  ## Table Of Content
  - [Description](#description)
  - [Installion instructions](#installion)
  - [Guidelines](#contribution)
  - [Instructions](#instructions)
  - [Licenses](#licenses)
  - [Questions](#questions)
  
  
  ## Description 
  ${data.description}

  ## Installion 
  ${data.installation}

  ## Contribution 
  ${data.contribution}

  ## Instructions
  ${data.instructions}

  ## Licenses 
  ${data.license}

  ## Questions
  Reach me here❗  
  - ${data.email}
  - github : ${data.github}
`;
}

module.exports = generateMarkdown;
