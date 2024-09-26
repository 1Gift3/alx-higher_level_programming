#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const outputFileName = process.argv[3];
const apiUrl = process.argv[2];

request(apiUrl, (error, response) => {
  if (response.statusCode === 200) {
    fs.writeFile(outputFileName, response.body, (writeError) => {
      if (writeError) {
        console.log(writeError);
      }
    });
  } else {
    console.log(error);
  }
});
