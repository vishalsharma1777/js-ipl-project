const DismissalFrequency = (deliveriesData) => {
  if (!Array.isArray(deliveriesData)) {
    return {};
  }

  const dismissalFrequency = {};
  deliveriesData.forEach((delivery) => {
    const bowler = delivery.bowler;
    const batsmanDismissed = delivery.player_dismissed;
    if (batsmanDismissed) {
      if (!dismissalFrequency[bowler]) {
        dismissalFrequency[bowler] = {};
      }
      if (!dismissalFrequency[bowler][batsmanDismissed]) {
        dismissalFrequency[bowler][batsmanDismissed] = 1;
      } else {
        dismissalFrequency[bowler][batsmanDismissed]++;
      }
    }
  });

  let maxDismissals = 0;
  let matchesWithMaxDismissals = [];
  for (const bowler in dismissalFrequency) {
    for (const batsmanDismissed in dismissalFrequency[bowler]) {
      const dismissals = dismissalFrequency[bowler][batsmanDismissed];
      if (dismissals > maxDismissals) {
        maxDismissals = dismissals;
        matchesWithMaxDismissals = [{ bowler, batsmanDismissed, dismissals }];
      } else if (dismissals === maxDismissals) {
        matchesWithMaxDismissals.push({ bowler, batsmanDismissed, dismissals });
      }
    }
  }
  return matchesWithMaxDismissals;
};

module.exports = DismissalFrequency;
