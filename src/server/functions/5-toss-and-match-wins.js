const tossAndMatchWins = (matchesData) => {
  if (!Array.isArray(matchesData)) {
    return {};
  }
  const tossAndMatchWinsByTeam = {};
  matchesData.forEach((obj) => {
    if (obj.toss_winner === obj.winner) {
      if (tossAndMatchWinsByTeam[obj.winner] === undefined) {
        tossAndMatchWinsByTeam[obj.winner] = 1;
      } else {
        tossAndMatchWinsByTeam[obj.winner]++;
      }
    }
  });
  return tossAndMatchWinsByTeam;
};

module.exports = tossAndMatchWins;
