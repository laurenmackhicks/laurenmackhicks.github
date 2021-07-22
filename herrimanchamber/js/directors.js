const requestURL = 'https://laurenmackhicks.github.io/laurenmackhicks.github/herrimanchamber/directors.json';

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
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = `${directors[i].name}`;
        p1.textContent = directors[i].title; 
        p2.innerHTML = `${directors[i].office}`;
        p3.innerHTML = `${directors[i].email}`; 
        image.setAttribute('src', directors[i].imageurl);
        image.setAttribute('alt', `${directors[i].name}`)
        image.style.boxShadow = '0 0 30px #999'

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(image);

        document.querySelector('div.directors').appendChild(card);
    }
  });