import { useState } from "react";

const useGenerate = () => {
  const [Obstacles, setObstacles] = useState([[19, 1]]);

  const AddObstacles = () => {
    let randomNum = Math.floor(Math.random() * 3);
    setObstacles((prevObstacles) => [...prevObstacles, [19, randomNum]]);
  };

  const MoveObstacles = (setScore) => {
    setObstacles((prevObstacles) => {
      let currObstacles = [];
      for (let i = 0; i < prevObstacles.length; i++) {
        let currCoordinate = prevObstacles[i][0];
        if (currCoordinate == 0) {
        } else {
          currObstacles.push([currCoordinate - 1, prevObstacles[i][1]]);
        }
      }
      if (prevObstacles.length > currObstacles.length) {
        let huddle = prevObstacles.length - currObstacles.length;
        setScore((prevScore) => prevScore + huddle * 50);
      }
      return currObstacles;
    });
  };

  return [Obstacles, AddObstacles, MoveObstacles];
};

export default useGenerate;
