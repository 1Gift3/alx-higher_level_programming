#!/usr/bin/node

const request = require('request');

const reqeuest = process.argv[2];

request(reqeuest, (err, res) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('code:', res.statusCode);
  }
});
