const SuperOverBowlers = (deliveriesData) => {
  if (!Array.isArray(deliveriesData)) {
    return {};
  }

  let bowlerEconomy = {};
  deliveriesData.forEach((delivery) => {
    const bowler = delivery.bowler;
    const totalRuns = parseInt(
      delivery.total_runs - delivery.bye_runs - delivery.legbye_runs
    );
    const ballsBowled = 1;
    const isSuperOver = delivery.is_super_over === '1';

    if (isSuperOver) {
      if (!bowlerEconomy[bowler]) {
        bowlerEconomy[bowler] = { runs: totalRuns, balls: ballsBowled };
      } else {
        bowlerEconomy[bowler].runs += totalRuns;
        bowlerEconomy[bowler].balls += ballsBowled;
      }
      if (delivery.wide_runs > 0 || delivery.noball_runs > 0) {
        bowlerEconomy[bowler].balls--;
      }
    }
  });

  for (const bowler in bowlerEconomy) {
    const { runs, balls } = bowlerEconomy[bowler];
    const economy = ((runs / balls) * 6).toFixed(2);
    bowlerEconomy[bowler].economy = parseFloat(economy);
  }

  const bowlerArray = Object.entries(bowlerEconomy).map(([name, economy]) => {
    return {
      name: name,
      economy: economy.economy
    };
  });
  bowlerArray.sort((a, b) => a.economy - b.economy);
  const lowestEconomy = bowlerArray[0].economy;
  const lowestEconomyBowlersInSuperOvers = [];

  for (const bowler of bowlerArray) {
    if (bowler.economy === lowestEconomy) {
      lowestEconomyBowlersInSuperOvers.push({
        name: bowler.name,
        economy: bowler.economy
      });
    } else {
      // Since the array is sorted, as soon as we find a bowler with higher economy, we can break the loop.
      break;
    }
  }

  return lowestEconomyBowlersInSuperOvers;
};

module.exports = SuperOverBowlers;
