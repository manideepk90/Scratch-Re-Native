const randomXY = (
  minX: number = -50,
  maxX: number = 50,
  minY = -50,
  maxY = -50
) => {
  return {
    x: Math.floor(Math.random() * (maxX - minX + 1) + minX),
    y: Math.floor(Math.random() * (maxY - minY + 1) + minY),
  };
};
export { randomXY };

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
