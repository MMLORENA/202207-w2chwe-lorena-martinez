import Cell from "./Cells.js";

const getLive = () => {
  if (Cell.isAlive === false && counterDeath === 3) {
    Cell.isAlive = true;
  }
  return Cell.isAlive;
};

export default getLive;
