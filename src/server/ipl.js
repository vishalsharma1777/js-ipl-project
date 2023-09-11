const http = require('http');
const fs = require('fs');
const readData = require('./util/readData');
const host = 'localhost';
const port = 5000;

const outputFiles = fs.readdirSync('src/public/output');
console.log(outputFiles);

const requestListener = function (req, res) {
  const urlByParts = req.url.split('/');
  if (urlByParts[2] < 10) {
    res.setHeader('Content-Type', 'json');
    res.writeHead(200);
    res.end(readData(`src/public/output/${outputFiles[urlByParts[2] - 1]}`));
  } else {
    res.setHeader('Content-Type', 'html');
    res.writeHead(200);
    res.end(readData('src/public/index.html'));
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
