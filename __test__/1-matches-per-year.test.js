const matchesPerYear = require('../src/server/functions/1-matches-per-year');

const matchData = require('../src/data/JSONmatches.json');
const test1_matchData = require('./testingDatas/1-sampleData.json');
const test2_matchData = require('./testingDatas/test1_matches.json');
const emmpty = 'vishal';

describe('Number of matches played per year for all the years in IPL.', () => {
  it('test case 1', () => {
    expect(matchesPerYear(matchData)).toStrictEqual({
      2008: 58,
      2009: 57,
      2010: 60,
      2011: 73,
      2012: 74,
      2013: 76,
      2014: 60,
      2015: 59,
      2016: 60,
      2017: 59
    });
  });
  it('test case 2', () => {
    expect(matchesPerYear(test1_matchData)).toStrictEqual({
      2001: 2,
      2002: 3,
      2003: 2,
      2004: 2,
      2005: 1
    });
  });
  it('test case 3', () => {
    expect(matchesPerYear(test2_matchData)).toStrictEqual({
      2008: 15,
      2009: 22,
      2010: 22,
      2011: 20,
      2012: 31,
      2013: 21,
      2014: 25,
      2015: 20,
      2016: 15,
      2017: 20
    });
  });
  it('test case 4', () => {
    expect(matchesPerYear(emmpty)).toStrictEqual({});
  });
});
