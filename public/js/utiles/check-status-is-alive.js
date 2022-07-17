import Cell from "./Cells.js";

const checkStatusIsAlive = (counterDeath) => {
  if ((Cell.isAlive && counterDeath < 2) || counterDeath > 3) {
    this.isAlive = false;
  } else if ((Cell.isAlive && counterDeath === 2) || counterDeath === 3) {
    this.isAlive = true;
  }
  return Cell.isAlive;
};

export default checkStatusIsAlive;
