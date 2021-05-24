import React from "react";

//랜덤 위치에서 생성
const ObstaclesGenerator = (obstaclesCoordinate, setObstaclesCoordinate) => {
  let randomNum = Math.floor(Math.random() * 3);
  setObstaclesCoordinate(...setObstaclesCoordinate, [19, randomNum]);
};

export default ObstaclesGenerator;
