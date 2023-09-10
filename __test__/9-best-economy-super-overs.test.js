const SuperOverBowlers = require('../src/server/functions/9-best-economy-super-overs');

const deliveryData = require('../src/data/JSONdeliveries.json');
const test1_deliveryData = require('./testingDatas/test1_deliveries.json');
const emmpty = 'vishal';

describe('the bowler with the best economy in super overs', () => {
  it('test case 1', () => {
    expect(SuperOverBowlers(deliveryData)).toEqual([
      { name: 'JJ Bumrah', economy: 4 }
    ]);
  });
  it('test case 2', () => {
    expect(SuperOverBowlers(test1_deliveryData)).toEqual([
      {
        name: 'R Rampaul',
        economy: 0
      }
    ]);
  });
  it('test case 3', () => {
    expect(SuperOverBowlers(emmpty)).toEqual({});
  });
});
