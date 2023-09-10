const potm = require('../src/server/functions/6-player-of-the-match-awards');

const matchData = require('../src/data/JSONmatches.json');
const test1_matchData = require('./testingDatas/test1_matches.json');
const yo = require('./testingDatas/6-sampleData.json');
const emmpty = 'vishal';

describe(' a player who has won the highest number of Player of the Match awards for each season', () => {
  it('test case 1', () => {
    expect(potm(matchData)).toStrictEqual([
      { Season: '2008', Players: ['SE Marsh'], Number_Of_Times: 5 },
      { Season: '2009', Players: ['YK Pathan'], Number_Of_Times: 3 },
      { Season: '2010', Players: ['SR Tendulkar'], Number_Of_Times: 4 },
      { Season: '2011', Players: ['CH Gayle'], Number_Of_Times: 6 },
      { Season: '2012', Players: ['CH Gayle'], Number_Of_Times: 5 },
      { Season: '2013', Players: ['MEK Hussey'], Number_Of_Times: 5 },
      { Season: '2014', Players: ['GJ Maxwell'], Number_Of_Times: 4 },
      { Season: '2015', Players: ['DA Warner'], Number_Of_Times: 4 },
      { Season: '2016', Players: ['V Kohli'], Number_Of_Times: 5 },
      {
        Season: '2017',
        Players: ['BA Stokes', 'NM Coulter-Nile'],
        Number_Of_Times: 3
      }
    ]);
  });
  it('test case 2', () => {
    expect(potm(test1_matchData)).toStrictEqual([
      {
        Season: '2008',
        Players: [
          'JDP Oram',
          'SK Raina',
          'SR Watson',
          'SE Marsh',
          'R Vinay Kumar',
          'M Ntini',
          'MS Dhoni',
          'GC Smith',
          'SC Ganguly',
          'ST Jayasuriya',
          'SM Pollock',
          'L Balaji',
          'V Sehwag',
          'DJ Bravo',
          'AC Gilchrist'
        ],
        Number_Of_Times: 1
      },
      {
        Season: '2009',
        Players: ['AB de Villiers', 'ML Hayden', 'YK Pathan'],
        Number_Of_Times: 2
      },
      {
        Season: '2010',
        Players: ['KA Pollard', 'JH Kallis', 'MS Dhoni'],
        Number_Of_Times: 2
      },
      {
        Season: '2011',
        Players: ['MEK Hussey', 'M Vijay'],
        Number_Of_Times: 2
      },
      { Season: '2012', Players: ['DW Steyn'], Number_Of_Times: 3 },
      { Season: '2013', Players: ['MEK Hussey'], Number_Of_Times: 3 },
      { Season: '2014', Players: ['Sandeep Sharma'], Number_Of_Times: 3 },
      { Season: '2015', Players: ['AM Rahane'], Number_Of_Times: 2 },
      { Season: '2016', Players: ['DA Warner'], Number_Of_Times: 2 },
      {
        Season: '2017',
        Players: ['BA Stokes', 'AJ Tye'],
        Number_Of_Times: 2
      }
    ]);
  });
  it('test case 2', () => {
    expect(potm(yo)).toStrictEqual([
      { Season: '2008', Players: ['R Sharma'], Number_Of_Times: 2 },
      { Season: '2009', Players: ['S Gill'], Number_Of_Times: 3 },
      {
        Season: '2010',
        Players: ['V Kohli', 'S Gill'],
        Number_Of_Times: 2
      },
      {
        Season: '2011',
        Players: ['R Sharma', 'MS Dhoni'],
        Number_Of_Times: 2
      }
    ]);
  });
  it('test case 3', () => {
    expect(potm(emmpty)).toStrictEqual({});
  });
});
