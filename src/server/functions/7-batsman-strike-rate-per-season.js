const strikeRateOfABatsmanPerSeason = (matchesData, deliveriesData) => {
  if (!Array.isArray(matchesData) || !Array.isArray(deliveriesData)) {
    return {};
  }
  const batsmanData = {};
  deliveriesData.forEach((delivery) => {
    const matchId = delivery.match_id;
    const batsman = delivery.batsman;
    const runs = parseInt(delivery.batsman_runs);
    const isWideOrNoBall = delivery.wide_runs > 0 || delivery.noball_runs > 0;

    if (!batsmanData[batsman]) {
      batsmanData[batsman] = {};
    }
    if (!batsmanData[batsman][matchId]) {
      batsmanData[batsman][matchId] = {
        runs: 0,
        balls: 0
      };
    }
    batsmanData[batsman][matchId].runs += runs;
    batsmanData[batsman][matchId].balls += isWideOrNoBall ? 0 : 1;
  });

  // console.log(batsmanData);

  const strikeRateByPlayerBySeason = {};
  for (const batsman in batsmanData) {
    strikeRateByPlayerBySeason[batsman] = {};

    for (const matchId in batsmanData[batsman]) {
      const { runs, balls } = batsmanData[batsman][matchId];
      const match = matchesData.find((match) => match.id === matchId);
      if (match) {
        const season = match.season;
        const strikeRate = parseFloat(((runs / balls) * 100).toFixed(2));
        strikeRateByPlayerBySeason[batsman][season] = strikeRate;
      }
    }
  }

  return strikeRateByPlayerBySeason;
};

module.exports = strikeRateOfABatsmanPerSeason;
