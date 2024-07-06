export const getOrigin = (canvasArea: { width: number; height: number }) => {
  return {
    x: canvasArea.width / 2,
    y: canvasArea.height / 2,
  };
};

export const clamp = (val: number, min: number, max: number) => {
  return Math.min(Math.max(val, min), max);
};

export const convertToXYCoordinates = (
  translationX: number,
  translationY: number,
  canvasArea: { width: number; height: number },
  spriteSize: number,
  width = spriteSize / 2,
  height = spriteSize / 2
) => {
  const origin = getOrigin(canvasArea);
  return {
    x: translationX - origin.x + width,
    y: translationY - origin.x + height,
  };
};

export const generateRandomColor = (opacity = 0.2) => {
  return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${opacity})`;
};

export const generateUniqueId = () => {
  return `id_${Date.now()}_${Math.floor(Math.random() * 1000000 + 1)}`;
};
