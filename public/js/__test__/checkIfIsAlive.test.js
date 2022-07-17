import checkStatusIsAlive from "../utiles/Grid.js";

describe("Given a function to check the status ifIsAlive", () => {
  describe("When it's called with a variable ifIsAlive with a true value, counterDeath with 2 death cells, checks if it has <2 death cells near and if the condition is true", () => {
    test("Then it should return false ", () => {
      const counterDeath = 1;
      const expectedIfIsAliveStatus = false;

      const checkIfIsAlive = checkStatusIsAlive(counterDeath);

      expect(checkIfIsAlive()).toBe(expectedIfIsAliveStatus);
    });
  });
});
