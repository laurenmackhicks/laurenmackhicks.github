const requestURL = 'https://laurenmackhicks.github.io/laurenmackhicks.github/herrimanchamber/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const direct = jsonObject['direct'];

    for (let i = 0; i < direct.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = `${direct[i].name}`;
        p1.textContent = direct[i].location; 
        p2.innerHTML = `${direct[i].phone} ${direct[i].link}`; 
        image.setAttribute('src', direct[i].imageurl);
        image.setAttribute('alt', `${direct[i].name} ${direct[i].hours}!`)
        image.style.boxShadow = '0 0 30px #999'

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(image);

        document.querySelector('div.direct').appendChild(card);
    }
  });