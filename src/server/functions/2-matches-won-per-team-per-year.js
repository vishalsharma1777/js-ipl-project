const matchesWonPerTeamPerYear = (matchesData) => {
  if (!Array.isArray(matchesData)) {
    return {};
  }
  const seasonsData = {};
  for (let match of matchesData) {
    const season = match.season;
    if (!seasonsData[season]) {
      seasonsData[season] = {};
    }
    const winner = match.winner === '' ? 'No Result' : match.winner;
    if (!seasonsData[season][winner]) {
      seasonsData[season][winner] = 1;
    } else {
      seasonsData[season][winner]++;
    }
  }
  return seasonsData;
};
module.exports = matchesWonPerTeamPerYear;
