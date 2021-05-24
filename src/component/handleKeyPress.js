const handleKeyPress = (e, setCharacterCoordinate) => {
  e.preventDefault();
  let currentCoordinate = 0;
  setCharacterCoordinate((prevCoordinate) => {
    currentCoordinate = prevCoordinate[0];
    return prevCoordinate;
  });
  if (e.keyCode === 38) {
    if (currentCoordinate === 0) {
      return;
    } else {
      setCharacterCoordinate([currentCoordinate - 1, 0]);
    }
  } else if (e.keyCode === 40) {
    if (currentCoordinate === 2) {
      return;
    } else {
      setCharacterCoordinate([currentCoordinate + 1, 0]);
    }
  }
  return;
};

export default handleKeyPress;
