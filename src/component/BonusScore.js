const BonusScore = (e, setcharacterCoordinate, setObstacles, setScore) => {
  e.preventDefault();
  let Obstacles;
  let characterCoordinate;
  setObstacles((prevObstacles) => {
    Obstacles = prevObstacles;
    return prevObstacles;
  });
  setcharacterCoordinate((prevCharacterCoordinate) => {
    characterCoordinate = prevCharacterCoordinate;
    return prevCharacterCoordinate;
  });

  let characterYposition = characterCoordinate[0];
  let obstaclesYPosition = Obstacles[0][1];
  let obstaclesXPosition = Obstacles[0][0];
  if (characterYposition === obstaclesYPosition && obstaclesXPosition === 1) {
    var isBonus = false;
    if (characterYposition === 0 && e.keyCode === 40) {
      isBonus = true;
    } else if (
      characterYposition === 1 &&
      (e.keyCode === 40 || e.keyCode === 38)
    ) {
      isBonus = true;
    } else if (characterYposition === 2 && e.keyCode === 38) {
      isBonus = true;
    }
    if (isBonus) {
      setScore((prevScore) => prevScore + 100);
    }
  }
};

export default BonusScore;
