#!/usr/bin/node

const request = require('request');
const filmId = process.argv[2];
const filmApiUrl = `https://swapi-api.alx-tools.com/api/films/${filmId}`;

function fetchCharacterData(characterUrl) {
  request(characterUrl, (error, response) => {
    if (response.statusCode === 200) {
      const characterName = JSON.parse(response.body).name;
      console.log(characterName);
    } else {
      console.log(error);
    }
  });
}

request(filmApiUrl, (error, response) => {
  if (response.statusCode === 200) {
    const filmData = JSON.parse(response.body);
    for (let index = 0; index < filmData.characters.length; index++) {
      fetchCharacterData(filmData.characters[index]);
    }
  } else {
    console.log(error);
  }
});
