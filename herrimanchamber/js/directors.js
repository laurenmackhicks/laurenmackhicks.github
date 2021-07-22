const fs = require('fs');
const json_data = require('../directors.json');

fs.readFile(json_data, 'utf8', function (err, data) {
  try {
    data = JSON.parse(data)
    for (let i in data){
    console.log('Name:',data[i].name)
    }
  } catch (e) {
    // Catch error in case file doesn't exist or isn't valid JSON
  }
});
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directors = jsonObject['directors'];

    for (let i = 0; i < directors.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = `${directors[i].name} ${prophets[i].lastname}`;
        p1.textContent = directors[i].birthdate; 
        p2.innerHTML = `Title: ${directors[i].title}`; 
        image.setAttribute('src', directors[i].imageurl);
        image.setAttribute('alt', `${directors[i].name} ${directors[i].lastname}!`)
        image.style.boxShadow = '0 0 30px #999'

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }
  });