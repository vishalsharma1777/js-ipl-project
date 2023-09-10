const fs = require('fs');
const printjson = (data, filePath) => {
  const jsonData = JSON.stringify(data, null, 4);
  fs.writeFileSync(filePath, jsonData, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`JSON data written to ${filePath}`);
    }
  });
};

module.exports = printjson;
