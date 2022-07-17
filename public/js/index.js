import Grid from "./utiles/Grid.js";

const gridBoard = new Grid(6, 6);
console.log(gridBoard.squares);

const iteration = gridBoard.entries();
console.log(iteration.next().value);
