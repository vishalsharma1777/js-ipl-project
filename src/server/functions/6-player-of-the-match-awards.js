const potm = (matchesData) => {
  if (!Array.isArray(matchesData)) {
    return {};
  }

  const potmBySeason = {};
  matchesData.forEach((match) => {
    const season = match.season;
    const potmWinner = match.player_of_match;

    if (!potmBySeason[season]) {
      potmBySeason[season] = {};
    }

    if (potmWinner) {
      if (!potmBySeason[season][potmWinner]) {
        potmBySeason[season][potmWinner] = 1;
      } else {
        potmBySeason[season][potmWinner]++;
      }
    }
  });

  const highestPotmPlayersBySeason = [];
  for (const season in potmBySeason) {
    const seasonData = potmBySeason[season];
    let maxPotmAwards = 0;
    let maxPotmPlayers = [];

    for (const player in seasonData) {
      if (seasonData[player] > maxPotmAwards) {
        maxPotmAwards = seasonData[player];
        maxPotmPlayers = [player];
      } else if (seasonData[player] === maxPotmAwards) {
        maxPotmPlayers.push(player);
      }
    }

    highestPotmPlayersBySeason.push({
      Season: season,
      Players: maxPotmPlayers,
      Number_Of_Times: maxPotmAwards
    });
  }

  return highestPotmPlayersBySeason;
};

module.exports = potm;
