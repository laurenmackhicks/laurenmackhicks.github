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