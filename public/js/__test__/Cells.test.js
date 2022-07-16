import Cell from "../utiles/Cells.js";

describe("Given a constructor Cell function", () => {
  describe("When it's invocated and if it doesn't receive any value ", () => {
    test("Then it should return an instanced Object Cell with the property isAlive and willDie with value false respectively", () => {
      const newCellTest = new Cell();
      const expectedNewCellTest = { isAlive: false, willDie: false };

      expect(expectedNewCellTest).toEqual(newCellTest);
    });
  });
});
