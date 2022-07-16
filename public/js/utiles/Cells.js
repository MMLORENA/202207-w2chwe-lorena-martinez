class Cell {
  isAlive;
  willDie;

  constructor(isAlive = false) {
    this.isAlive = isAlive;
  }
}

export default Cell;
