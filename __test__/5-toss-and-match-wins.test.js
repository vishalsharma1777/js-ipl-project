const tossAndMatchWins = require('../src/server/functions/5-toss-and-match-wins');

const matchData = require('../src/data/JSONmatches.json');
const test1_matchData = require('./testingDatas/test1_matches.json');
const sampleMatches = require('./testingDatas/5-sampleData.json');
const emmpty = 'vishal';

describe('number of times the toss wining team has won the match', () => {
  it('test case 1', () => {
    expect(tossAndMatchWins(matchData)).toStrictEqual({
      'Rising Pune Supergiant': 5,
      'Kolkata Knight Riders': 44,
      'Kings XI Punjab': 28,
      'Royal Challengers Bangalore': 35,
      'Sunrisers Hyderabad': 17,
      'Mumbai Indians': 48,
      'Gujarat Lions': 10,
      'Delhi Daredevils': 33,
      'Chennai Super Kings': 42,
      'Rajasthan Royals': 34,
      'Deccan Chargers': 19,
      'Kochi Tuskers Kerala': 4,
      'Pune Warriors': 3,
      'Rising Pune Supergiants': 3
    });
  });
  it('test case 2', () => {
    expect(tossAndMatchWins(sampleMatches)).toStrictEqual({
      KKR: 2,
      RCB: 1,
      CSK: 1
    });
  });
  it('test case 3', () => {
    expect(tossAndMatchWins(test1_matchData)).toStrictEqual({
      'Mumbai Indians': 15,
      'Chennai Super Kings': 17,
      'Kings XI Punjab': 11,
      'Kolkata Knight Riders': 16,
      'Royal Challengers Bangalore': 11,
      'Rajasthan Royals': 9,
      'Delhi Daredevils': 9,
      'Deccan Chargers': 4,
      'Kochi Tuskers Kerala': 1,
      'Gujarat Lions': 4,
      'Rising Pune Supergiants': 1,
      'Rising Pune Supergiant': 1,
      'Pune Warriors': 2,
      'Sunrisers Hyderabad': 4
    });
  });
  it('test case 4', () => {
    expect(tossAndMatchWins(emmpty)).toStrictEqual({});
  });
});
