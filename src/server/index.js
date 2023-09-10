//helper functions
const matchData = require('../data/JSONmatches.json');
const deliveryData = require('../data/JSONdeliveries.json');
const printjson = require('./util/JSON-output.js');

//main functions
const matchesPerYear = require('./functions/1-matches-per-year.js');
const matchesWonPerTeamPerYear = require('./functions/2-matches-won-per-team-per-year.js');
const extraruns2016 = require('./functions/3-extra-runs-conceded-2016.js');
const EconomicalBowlers = require('./functions/4-top-10-economical-bowlers-2015.js');
const tossAndMatchWins = require('./functions/5-toss-and-match-wins.js');
const potm = require('./functions/6-player-of-the-match-awards.js');
const strikeRateOfABatsmanPerSeason = require('./functions/7-batsman-strike-rate-per-season.js');
const DismissalFrequency = require('./functions/8-most-dismissed-by-player.js');
const SuperOverBowlers = require('./functions/9-best-economy-super-overs.js');

const result1 = matchesPerYear(matchData);
printjson(result1, '../public/output/1-matchesPerYear.json');

const result2 = matchesWonPerTeamPerYear(matchData);
printjson(result2, '../public/output/2-matchesWonPerTeamPerYear.json');

const result3 = extraruns2016(deliveryData, matchData);
printjson(result3, '../public/output/3-extraRunsConceded2016.json');

const result4 = EconomicalBowlers(deliveryData, matchData);
printjson(result4, '../public/output/4-top10EconomicalBowlers2015.json');

const result5 = tossAndMatchWins(matchData);
printjson(result5, '../public/output/5-tossAndMatchWins.json');

const result6 = potm(matchData);
printjson(result6, '../public/output/6-playerOfTheMatchAwards.json');

const result7 = strikeRateOfABatsmanPerSeason(matchData, deliveryData);
printjson(result7, '../public/output/7-batsmanStrikeRatePerSeason.json');

const result8 = DismissalFrequency(deliveryData);
printjson(result8, '../public/output/8-mostDismissedByPlayer.json');

const result9 = SuperOverBowlers(deliveryData);
printjson(result9, '../public/output/9-bestEconomySuperOvers.json');
