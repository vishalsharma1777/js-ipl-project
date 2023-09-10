const extraruns2016 = require('../src/server/functions/3-extra-runs-conceded-2016');

const matchData = require('../src/data/JSONmatches.json');
const deliveryData = require('../src/data/JSONdeliveries.json');
const yo = require('./testingDatas/3-sampleData');
const test1_matchData = require('./testingDatas/test1_matches.json');
const test1_deliveryData = require('./testingDatas/test1_deliveries.json');
const emmpty = 'vishal';

describe('Extra runs conceded per team in the year 2016', () => {
  it('test case 1', () => {
    expect(extraruns2016(deliveryData, matchData)).toStrictEqual({
      'Rising Pune Supergiants': 108,
      'Mumbai Indians': 102,
      'Kolkata Knight Riders': 122,
      'Delhi Daredevils': 106,
      'Gujarat Lions': 98,
      'Kings XI Punjab': 100,
      'Sunrisers Hyderabad': 107,
      'Royal Challengers Bangalore': 156
    });
  });
  it('test case 2', () => {
    expect(extraruns2016(yo.sampleDeliveries, yo.sampleMatches)).toStrictEqual({
      KKR: 25,
      RCB: 4,
      CSK: 24
    });
  });
  it('test case 3', () => {
    expect(extraruns2016(test1_deliveryData, test1_matchData)).toStrictEqual({
      'Royal Challengers Bangalore': 17,
      'Mumbai Indians': 4,
      'Sunrisers Hyderabad': 12,
      'Delhi Daredevils': 18,
      'Kings XI Punjab': 11,
      'Rising Pune Supergiants': 0,
      'Kolkata Knight Riders': 6,
      'Gujarat Lions': 5
    });
  });
  it('test case 4', () => {
    expect(extraruns2016(test1_deliveryData, emmpty)).toStrictEqual({});
  });
});
