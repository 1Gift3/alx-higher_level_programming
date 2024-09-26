#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response) => {
  if (response.statusCode === 200) {
    const jsonResponse = JSON.parse(response.body);
    const userCompletionCount = {};
    for (let index = 0; index < jsonResponse.length; index++) {
      if (jsonResponse[index].completed) {
        if (jsonResponse[index].userId in userCompletionCount) {
          userCompletionCount[jsonResponse[index].userId] += 1;
        } else {
          userCompletionCount[jsonResponse[index].userId] = 1;
        }
      }
    }
    console.log(userCompletionCount);
  } else {
    console.log(error);
  }
});
