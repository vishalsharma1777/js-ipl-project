const extraruns2016 = (deliveriesData, matchesData) => {
  if (!Array.isArray(matchesData) || !Array.isArray(deliveriesData)) {
    return {};
  }
  const IDfromMatchdata = new Set();
  for (let key in matchesData) {
    if (matchesData[key].season === '2016') {
      IDfromMatchdata.add(matchesData[key].id);
    }
  }
  const extraRunsPerTeam = {};
  for (const obj of deliveriesData) {
    if (IDfromMatchdata.has(obj.match_id)) {
      const bowlingTeam = obj.bowling_team;
      const extraRuns = Number(obj.extra_runs);

      if (extraRunsPerTeam[bowlingTeam] === undefined) {
        extraRunsPerTeam[bowlingTeam] = extraRuns;
      } else {
        extraRunsPerTeam[bowlingTeam] += extraRuns;
      }
    }
  }
  return extraRunsPerTeam;
};

module.exports = extraruns2016;
