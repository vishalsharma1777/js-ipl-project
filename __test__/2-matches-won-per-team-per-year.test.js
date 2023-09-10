const matchesWonPerTeamPerYear = require('../src/server/functions/2-matches-won-per-team-per-year');

const test1_matchData = require('./testingDatas/2-sampleData.json');
const emmpty = 'vishal';

describe('Number of matches won per team per year in IPL.', () => {
  it('test case 1', () => {
    expect(matchesWonPerTeamPerYear(test1_matchData)).toStrictEqual({
      2001: { RCB: 1, KKR: 1 },
      2002: { SRH: 1, KKR: 1, CSK: 1 },
      2003: { CSK: 1, KKR: 1 },
      2004: { MI: 2 },
      2005: { CSK: 1 }
    });
  });
  it('test case 2', () => {
    expect(matchesWonPerTeamPerYear(emmpty)).toStrictEqual({});
  });
});
