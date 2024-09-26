#!/usr/bin/node

const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, 'utf-8', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});