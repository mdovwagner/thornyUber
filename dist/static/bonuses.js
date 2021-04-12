export const bonuses = {
  GameEnd: {
    id: "GameEnd",
    points: [1],
    type: "gameEnd"
  },
  // Distance Bonuses
  Distance5: {
    id: "Distance5",
    points: [2, 1],
    distance: 5,
    type: "distance"
  },
  Distance6: {
    id: "Distance6",
    points: [3, 2, 1],
    distance: 6,
    type: "distance"
  },
  Distance7: {
    id: "Distance7",
    points: [4, 3, 2, 1],
    distance: 7,
    type: "distance"
  },
  // Region Bonuses
  Purple: {
    id: "Purple",
    points: [3, 2, 1],
    regions: ["magenta"],
    type: "region"
  },
  Blue: {
    id: "Blue",
    points: [3, 2, 1],
    regions: ["cyan", "blue"],
    type: "region"
  },
  Green: {
    id: "Green",
    points: [3, 2, 1],
    regions: ["green", "limeGreen"],
    type: "region"
  },
  Orange: {
    id: "Orange",
    points: [4, 3, 2],
    regions: ["orange", "red"],
    type: "region"
  },
  Grey: {
    id: "Grey",
    points: [5, 4, 3, 2],
    regions: ["darkGrey"],
    type: "region"
  },
  // AllProvinces Bonus
  AllProvinces: {
    id: "AllProvinces",
    points: [6, 5, 4, 3],
    regions: ["dimGrey", "orange", "red", "darkGrey", "green", "limeGreen", "cyan", "blue", "magenta"],
    type: "all"
  }
};