import Grid from "../utiles/Grid.js";
import Cell from "../utiles/Cells.js";

describe("Given a constructor Grid function", () => {
  describe("When it's invocated it reveive the values 1,1 for the properties row and column", () => {
    test("Then it should return an instanced object Grid with three properties: row, colmuns and squares inside which there is an array with a sub array that contained an instanced object Cell with value false by default", () => {
      const row = 1;
      const column = 1;
      const newGridTest = new Grid(row, column);

      const expectedGrid = {
        squares: [[{ isAlive: false, willDie: false }]],
        columns: 1,
        rows: 1,
      };

      expect(expectedGrid).toEqual(newGridTest);
    });
  });
});
