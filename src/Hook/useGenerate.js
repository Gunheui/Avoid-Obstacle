import { useState } from "react";

const useGenerate = () => {
  const [Obstacles, setObstacles] = useState([[19, 1, false]]);

  const AddObstacles = () => {
    let randomNum = Math.floor(Math.random() * 3);
    let randomObstaclesNum = Math.floor(Math.random() * 20);
    let isPotion = false;
    if (randomObstaclesNum === 15) {
      isPotion = true;
    }
    setObstacles((prevObstacles) => [
      ...prevObstacles,
      [19, randomNum, isPotion],
    ]);
  };

  const MoveObstacles = (setScore) => {
    setObstacles((prevObstacles) => {
      let currObstacles = [];
      for (let i = 0; i < prevObstacles.length; i++) {
        let currCoordinate = prevObstacles[i][0];
        if (currCoordinate === 0) {
        } else {
          currObstacles.push([
            currCoordinate - 1,
            prevObstacles[i][1],
            prevObstacles[i][2],
          ]);
        }
      }
      if (prevObstacles.length > currObstacles.length) {
        let huddle = prevObstacles.length - currObstacles.length;
        setScore((prevScore) => prevScore + huddle * 100);
      }
      return currObstacles;
    });
  };

  return [Obstacles, setObstacles, AddObstacles, MoveObstacles];
};

export default useGenerate;
