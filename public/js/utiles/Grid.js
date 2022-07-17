import Cell from "./Cells.js";

class Grid {
  rows;
  columns;
  squares;
  randomStatus;

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.squares = this.createSquares();
  }

  createSquares() {
    const squares = new Array(this.columns).fill(
      new Array(this.rows).fill(new Cell(this.getRandomStatus()))
    );
    return squares;
  }

  getRandomStatus() {
    this.randomStatus = Math.random() < 0.5;
    return this.randomStatus;
  }
}

export default Grid;
