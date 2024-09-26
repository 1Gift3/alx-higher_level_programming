#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const path = `https://swapi-api.alx-tools.com/api/films/${id}`;

request(path, (err, res) => {
  if (res.statusCode === 200) {
    const filmtitle = JSON.parse(res.body);
    console.log(filmtitle.title);
  } else {
    console.log(err);
  }
});
