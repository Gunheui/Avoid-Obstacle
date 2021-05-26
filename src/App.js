import "./App.css";
import React, { useState, useEffect } from "react";
import useGenerate from "./Hook/useGenerate";
import GameMap from "./component/GameMap";
import handleKeyPress from "./component/handleKeyPress";
import useInterval from "./Hook/useInterval";
import RestartButton from "./component/RestartButton";
import BonusScore from "./component/BonusScore";

function App() {
  const [Obstacles, setObstacles, AddObstacles, MoveObstacles] = useGenerate(
    []
  );
  const [characterCoordinate, setCharacterCoordinate] = useState([1, 0]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [obstaclesCycle, setObstaclesCycle] = useState(1000);
  const [moveSpeed, setMoveSpeed] = useState(500);
  const [speedScale, setSpeedScale] = useState(1);
  const [isSuperMan, setIsSuperMan] = useState(false);
  const [superManScore, setSuperManScore] = useState(0);

  useEffect(() => {
    if (isGameOver) {
      return;
    }
    const keyHandler = (e) => {
      BonusScore(e, setCharacterCoordinate, setObstacles, setScore);
      handleKeyPress(e, setCharacterCoordinate);
    };
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
    if (!isSuperMan) {
      setMoveSpeed(500 - speedScale * 25);
      setObstaclesCycle(1000 - speedScale * 50);
    }
  }, [speedScale]);

  useEffect(() => {
    if (score <= 10000) {
      setSpeedScale(parseInt(score / 1000));
    }
  }, [score]);

  useEffect(() => {
    if (isSuperMan) {
      if (superManScore + 1000 + speedScale * 100 < score) {
        setMoveSpeed(500 - speedScale * 25);
        setObstaclesCycle(1000 - speedScale * 50);
        if (superManScore + 1500 + speedScale * 100 < score) {
          setIsSuperMan(false);
        }
      } else {
        setMoveSpeed(100);
        setObstaclesCycle(200);
      }
    }
  }, [score]);

  return (
    <div className="App">
      <h1>Score : {score}</h1>
      <GameMap
        characterCoordinate={characterCoordinate}
        obstaclesCoordinate={Obstacles}
        setIsGameOver={setIsGameOver}
        setIsSuperMan={setIsSuperMan}
        isSuperMan={isSuperMan}
        setSuperManScore={setSuperManScore}
        score={score}
      />
      <RestartButton />
    </div>
  );
}

export default App;
