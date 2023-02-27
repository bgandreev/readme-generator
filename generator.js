function generator(data) {
    return `
    
    # ${data.title}
  

    ## Description
  
        ${data.description}

  
    ## License

        ${data.license}


    ## Installation Instructions
  
        ${data.installation}

  
    ## Test Instructions
  
        ${data.test}

  
    ## Usage
  
        ${data.usage}
    
    
    ## Information for Contributors
  
        ${data.contributing}
  
  
    ## Questions and inquiries at ${data.email}
   

    ## GitHub Page

        https://github.com/${data.github}
  
  `;
}   
  
module.exports = generator;
  