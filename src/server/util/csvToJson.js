const csvtojson = require('csvtojson');
const fs = require('fs');

function csvToJson(filepath, outputPath) {
  csvtojson()
    .fromFile(filepath)
    .then((json) => {
      fs.writeFileSync(outputPath, JSON.stringify(json), 'utf-8', (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
}

module.exports.csvToJson = csvToJson;
