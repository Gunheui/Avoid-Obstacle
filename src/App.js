import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import ObstaclesGenerator from "./component/ObstaclesGenerator";
import useGenerate from "./Hook/useGenerate";
import GameMap from "./component/GameMap";
import handleKeyPress from "./component/handleKeyPress";
import useInterval from "./Hook/useInterval";
import RestartButton from "./component/RestartButton";

function App() {
  const [Obstacles, AddObstacles, MoveObstacles] = useGenerate([]);
  const [characterCoordinate, setCharacterCoordinate] = useState([1, 0]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [obstaclesCycle, setObstaclesCycle] = useState(1000);
  const [moveSpeed, setMoveSpeed] = useState(500);
  const [speedScale, setSpeedScale] = useState(1);

  useEffect(() => {
    const keyHandler = (e) => handleKeyPress(e, setCharacterCoordinate);
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [setCharacterCoordinate]);

  useInterval(
    () => {
      AddObstacles();
    },
    isGameOver ? null : obstaclesCycle
  );

  useInterval(
    () => {
      MoveObstacles(setScore);
    },
    isGameOver ? null : moveSpeed
  );

  useEffect(() => {
    setMoveSpeed(500 - speedScale * 25);
    setObstaclesCycle(1000 - speedScale * 50);
  }, [speedScale]);

  useEffect(() => {
    setSpeedScale(parseInt(score / 1000));
  }, [score]);

  return (
    <div className="App">
      <h1>Score : {score}</h1>
      <GameMap
        characterCoordinate={characterCoordinate}
        obstaclesCoordinate={Obstacles}
        setIsGameOver={setIsGameOver}
      />
      <RestartButton isGameOver={isGameOver} />
    </div>
  );
}

export default App;
