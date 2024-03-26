export function getRating(correctPoints?: number, totalPoints?: number) {
  if (!correctPoints || !totalPoints) {
    return "noob max ultra";
  }

  const percentage = (correctPoints / totalPoints) * 100;

  // Define rating categories and their thresholds
  const ratings = [
    { name: "pro max", minPercentage: 90, maxPercentage: Infinity },
    { name: "pro", minPercentage: 80, maxPercentage: 90 },
    { name: "noob", minPercentage: 60, maxPercentage: 80 },
    { name: "noob max", minPercentage: 40, maxPercentage: 60 },
    { name: "noob max ultra", minPercentage: 0, maxPercentage: 40 },
  ];

  let rating = "no rating"; // Default value if no rating matches
  for (let i = 0; i < ratings.length; i++) {
    if (
      percentage >= ratings[i].minPercentage &&
      percentage < ratings[i].maxPercentage
    ) {
      rating = ratings[i].name;
      break;
    }
  }

  return rating;
}
