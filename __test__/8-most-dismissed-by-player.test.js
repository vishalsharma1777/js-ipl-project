const DismissalFrequency = require('../src/server/functions/8-most-dismissed-by-player');

const deliveryData = require('../src/data/JSONdeliveries.json');
const test1_deliveryData = require('./testingDatas/test1_deliveries.json');
const emmpty = 'vishal';

describe('the highest number of times one player has been dismissed by another player', () => {
  it('test case 1', () => {
    expect(DismissalFrequency(deliveryData)).toEqual([
      {
        bowler: 'Z Khan',
        batsmanDismissed: 'MS Dhoni',
        dismissals: 7
      },
      {
        bowler: 'PP Ojha',
        batsmanDismissed: 'MS Dhoni',
        dismissals: 7
      }
    ]);
  });
  it('test case 2', () => {
    expect(DismissalFrequency(test1_deliveryData)).toEqual([
      {
        bowler: 'B Kumar',
        batsmanDismissed: 'YK Pathan',
        dismissals: 3
      },
      {
        bowler: 'A Mishra',
        batsmanDismissed: 'RA Jadeja',
        dismissals: 3
      },
      {
        bowler: 'P Kumar',
        batsmanDismissed: 'S Dhawan',
        dismissals: 3
      },
      {
        bowler: 'SK Warne',
        batsmanDismissed: 'SK Raina',
        dismissals: 3
      },
      {
        bowler: 'SK Warne',
        batsmanDismissed: 'RG Sharma',
        dismissals: 3
      },
      {
        bowler: 'DS Kulkarni',
        batsmanDismissed: 'V Kohli',
        dismissals: 3
      },
      {
        bowler: 'Sandeep Sharma',
        batsmanDismissed: 'CH Gayle',
        dismissals: 3
      },
      {
        bowler: 'Sandeep Sharma',
        batsmanDismissed: 'V Kohli',
        dismissals: 3
      },
      {
        bowler: 'DJ Bravo',
        batsmanDismissed: 'SR Watson',
        dismissals: 3
      },
      {
        bowler: 'MM Patel',
        batsmanDismissed: 'R Dravid',
        dismissals: 3
      },
      {
        bowler: 'SP Narine',
        batsmanDismissed: 'Harbhajan Singh',
        dismissals: 3
      },
      {
        bowler: 'Harbhajan Singh',
        batsmanDismissed: 'MK Pandey',
        dismissals: 3
      },
      {
        bowler: 'Harbhajan Singh',
        batsmanDismissed: 'SK Raina',
        dismissals: 3
      },
      {
        bowler: 'DL Vettori',
        batsmanDismissed: 'JH Kallis',
        dismissals: 3
      }
    ]);
  });
  it('test case 3', () => {
    expect(DismissalFrequency(emmpty)).toEqual({});
  });
});
