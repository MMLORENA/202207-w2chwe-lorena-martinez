const askAdjacentCell = (row, bacteriums) => {
  let alivesNeighboors = 0;

  for (let j = 0; j < 3; j += 1) {
    if (bacteriums[row - 1][j] && bacteriums[row - 1][j].status) {
      alivesNeighboors += 1;
    }
  }

  for (let j = 0; j < 3; j += 1) {
    if (bacteriums[row][j] && bacteriums[row][j].status) {
      alivesNeighboors += 1;
    }
  }

  for (let j = 0; j < 3; j += 1) {
    if (bacteriums[row + 1][j] && bacteriums[row + 1][j].status) {
      alivesNeighboors += 1;
    }
  }
  return alivesNeighboors;
};

const bacteriums = new Array(3).fill(Array(3).fill("#"));
console.log(bacteriums);
