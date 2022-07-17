const getLive = () => {
  if (cellIfIsAlive === false && counterDeath === 3) {
    cellIfIsAlive = true;
  }
  return cellIfIsAlive;
};
export { getLive };
