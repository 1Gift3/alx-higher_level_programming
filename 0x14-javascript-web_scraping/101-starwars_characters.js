#!/usr/bin/node

const request = require('request');
const filmId = process.argv[2];
const filmApiUrl = `https://swapi-api.alx-tools.com/api/films/${filmId}`;

function fetchCharacterName(characterUrl) {
  return new Promise((resolve, reject) => {
    request(characterUrl, (error, response) => {
      if (error) {
        reject(new Error(error));
      } else if (response.statusCode === 200) {
        const characterName = JSON.parse(response.body).name;
        resolve(characterName);
      } else {
        reject(new Error(`Failed to fetch character details for ${characterUrl}`));
      }
    });
  });
}

request(filmApiUrl, (error, response) => {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    const filmDetails = JSON.parse(response.body);

    const characterPromises = filmDetails.characters.map(fetchCharacterName);

    Promise.all(characterPromises)
      .then(names => {
        names.forEach(name => console.log(name));
      })
      .catch(error => console.log(error));
  } else {
    console.log(`Failed to fetch film details for ID ${filmId}`);
  }
});
