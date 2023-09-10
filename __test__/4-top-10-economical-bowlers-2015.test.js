const EconomicalBowlers = require('../src/server/functions/4-top-10-economical-bowlers-2015');

const matchData = require('../src/data/JSONmatches.json');
const deliveryData = require('../src/data/JSONdeliveries.json');
const yo = require('./testingDatas/4-sampleData.json');
const test1_matchData = require('./testingDatas/test1_matches.json');
const test1_deliveryData = require('./testingDatas/test1_deliveries.json');
const emmpty = 'vishal';

describe('top 10 economical bowlers of 2015', () => {
  it('test case 1', () => {
    expect(EconomicalBowlers(deliveryData, matchData)).toEqual([
      'J Yadav',
      'R Ashwin',
      'Parvez Rasool',
      'MC Henriques',
      'Z Khan',
      'MA Starc',
      'GB Hogg',
      'Sandeep Sharma',
      'Bipul Sharma',
      'IC Pandey'
    ]);
  });
  it('test case 2', () => {
    expect(EconomicalBowlers(test1_deliveryData, test1_matchData)).toEqual([
      'PV Tambe',
      'DS Kulkarni',
      'IC Pandey',
      'Sandeep Sharma',
      'SL Malinga',
      'SP Narine',
      'MJ McClenaghan',
      'TA Boult',
      'STR Binny',
      'MC Henriques'
    ]);
  });
  it('test case 3', () => {
    expect(EconomicalBowlers(test1_deliveryData, emmpty)).toEqual([]);
  });
});
