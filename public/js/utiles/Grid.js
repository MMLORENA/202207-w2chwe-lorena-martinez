import Cell from "./Cells.js";

class Grid {
  rows;
  columns;
  squares;

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.squares = this.createSquares();
  }

  createSquares() {
    const squares = new Array(this.columns).fill(
      new Array(this.rows).fill(new Cell())
    );
    return squares;
  }
}

export default Grid;
