const ObstaclesMove = (obstaclesCoordinate, setObstaclesCoordinate) => {
  let prevObstacles = [];
  for (let i = 0; i < obstaclesCoordinate.length; i++) {
    let currCoordinate = obstaclesCoordinate[i][0];
    if (currCoordinate == 0) {
      continue;
    } else {
      prevObstacles.push([currCoordinate - 1, obstaclesCoordinate[i][1]]);
    }
  }
  setObstaclesCoordinate(prevObstacles);
};
