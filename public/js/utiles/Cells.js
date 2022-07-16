class Cell {
  isAlive;
  willDie = false;

  constructor(isAlive = false) {
    this.isAlive = isAlive;
  }
}

export default Cell;
