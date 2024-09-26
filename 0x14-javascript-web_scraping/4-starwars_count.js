#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (response.statusCode === 200) {
    const jsonResponse = JSON.parse(body);
    const resultsArray = jsonResponse.results;
    let characterCount = 0;
    
    for (let i = 0; i < resultsArray.length; i++) {
      for (let j = 0; j < resultsArray[i].characters.length; j++) {
        if (resultsArray[i].characters[j].endsWith('/18/')) {
          characterCount++;
        }
      }
    }
    console.log(characterCount);
  } else {
    console.log(error);
  }
});
