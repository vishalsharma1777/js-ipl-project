const { csvToJson } = require('./util/csvToJson.js');

const matchesFilePath = '../data/matches.csv';
const deliveriesFilePath = '../data/deliveries.csv';

csvToJson(matchesFilePath, '../data/JSONmatches.json');
csvToJson(deliveriesFilePath, '../data/JSONdeliveries.json');
