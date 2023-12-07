export const getPositionFromKey = (key: string): string[] => {
  return key.split(",");
};

export const getKeyFromPosition = (
  colIndex: number,
  rowIndex: number
): string => {
  return `${colIndex},${rowIndex}`;
};
