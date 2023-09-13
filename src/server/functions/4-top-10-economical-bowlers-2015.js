const EconomicalBowlers = (deliveriesData, matchesData) => {
  if (!Array.isArray(matchesData) || !Array.isArray(deliveriesData)) {
    return [];
  }

  const IDfromMatchdata = [];
  for (let key in matchesData) {
    if (matchesData[key].season === '2015') {
      IDfromMatchdata.push(matchesData[key].id);
    }
  }

  const bowlerEconomy = {};
  deliveriesData.forEach((delivery) => {
    if (IDfromMatchdata.includes(delivery.match_id)) {
      const bowler = delivery.bowler;
      const totalRuns = parseInt(
        delivery.total_runs - delivery.bye_runs - delivery.legbye_runs
      );
      const ballsBowled = 1;
      const isWicket = delivery.player_dismissed !== '';

      if (!bowlerEconomy[bowler]) {
        bowlerEconomy[bowler] = {
          runs: totalRuns,
          balls: ballsBowled,
          wickets: isWicket ? 1 : 0
        };
      } else if (delivery.wide_runs > 0 || delivery.noball_runs > 0) {
        bowlerEconomy[bowler].runs += totalRuns;
      } else {
        bowlerEconomy[bowler].runs += totalRuns;
        bowlerEconomy[bowler].balls += ballsBowled;
        if (isWicket) {
          bowlerEconomy[bowler].wickets += 1;
        }
      }
    }
  });

  const validBowlers = Object.keys(bowlerEconomy).filter((bowler) => {
    return (
      bowlerEconomy[bowler].wickets >= 1 && bowlerEconomy[bowler].balls >= 12
    );
  });

  const finalBowlers = validBowlers.map((bowler) => ({
    bowler,
    economy:
      bowlerEconomy[bowler].runs / Math.floor(bowlerEconomy[bowler].balls / 6)
  }));

  finalBowlers.sort((a, b) => a.economy - b.economy);
  const topTenEconomicalBowlers = finalBowlers.slice(0, 10);

  return topTenEconomicalBowlers;
};

module.exports = EconomicalBowlers;
