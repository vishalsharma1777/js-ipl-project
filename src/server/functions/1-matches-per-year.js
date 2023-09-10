const matchesPerYear = (matchesData) => {
  if (!Array.isArray(matchesData)) {
    return {};
  }
  const countOfMatchedPlayed = {};
  matchesData.forEach((obj) => {
    if (countOfMatchedPlayed[obj.season] === undefined) {
      countOfMatchedPlayed[obj.season] = 1;
    } else {
      countOfMatchedPlayed[obj.season]++;
    }
  });
  return countOfMatchedPlayed;
};

module.exports = matchesPerYear;
