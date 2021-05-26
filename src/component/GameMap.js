import React from "react";
import Barrier from "../Image/Barrier.png";
import Character from "../Image/Character.png";
import Boom from "../Image/shockwave.png";
import Potion from "../Image/potion.png";
import Superman from "../Image/superman.png";

const GameMap = ({
  characterCoordinate,
  obstaclesCoordinate,
  setIsGameOver,
  setIsSuperMan,
  isSuperMan,
  setSuperManScore,
  score,
}) => {
  const coordinate = Array.from({ length: 3 }, () =>
    Array.from({ length: 20 }, () => 0)
  );

  const MapRender = () => {
    if (!isSuperMan) {
      coordinate[characterCoordinate[0]][characterCoordinate[1]] = 2;
    } else {
      coordinate[characterCoordinate[0]][characterCoordinate[1]] = 5;
    }

    for (let i = 0; i < obstaclesCoordinate.length; i++) {
      let x = obstaclesCoordinate[i][0];
      let y = obstaclesCoordinate[i][1];
      let isPotion = obstaclesCoordinate[i][2];
      if (
        characterCoordinate[0] === y &&
        characterCoordinate[1] === x &&
        !isPotion
      ) {
        if (!isSuperMan) {
          setIsGameOver(true);
          coordinate[y][x] = 3;
        } else {
          coordinate[y][x] = 5;
        }
      } else if (
        characterCoordinate[0] === y &&
        characterCoordinate[1] === x &&
        isPotion
      ) {
        if (!isSuperMan) {
          setSuperManScore(score);
        }
        setIsSuperMan(true);
        coordinate[y][x] = 5;
      } else if (!isPotion) {
        coordinate[y][x] = 1;
      } else if (isPotion) {
        coordinate[y][x] = 4;
      }
    }

    const result = coordinate.map((heightVal, heightidx) => (
      <tr key={`height_${heightidx}`}>
        {heightVal.map((widthVal, widthIdx) => (
          <td key={`width_${widthIdx}`} width="50px" height="100px">
            {inputImage(widthVal)}
          </td>
        ))}
      </tr>
    ));
    return result;
  };

  const inputImage = (value) => {
    if (value === 1) {
      return <img src={Barrier} width="40px" height="40px" alt="Barrier" />;
    } else if (value === 2) {
      return <img src={Character} width="40px" height="40px" alt="Character" />;
    } else if (value === 3) {
      return <img src={Boom} width="40px" height="40px" alt="Boom" />;
    } else if (value === 4) {
      return <img src={Potion} width="40px" height="40px" alt="Potion" />;
    } else if (value === 5) {
      return <img src={Superman} width="40px" height="40px" alt="Superman" />;
    }
  };

  return (
    <table className="game_map" width="1000px" height="300px" align="center">
      <tbody>
        <MapRender />
      </tbody>
    </table>
  );
};

export default GameMap;
