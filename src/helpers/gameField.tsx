import { CellContainer } from "../components/Cell";
import styles from "../components/GameField/GameField.module.css";
import { GenerateGameField, GenerateGameRow } from "../types";

export const generateFieldRow = ({
  rowIndex,
  fieldSize,
  hoveredTiles,
  hoverCallback,
}: GenerateGameRow): JSX.Element => {
  return (
    <div key={rowIndex} className={styles.row}>
      {Array.from({ length: fieldSize }, (_, colIndex) => (
        <CellContainer
          key={colIndex}
          colIndex={colIndex}
          rowIndex={rowIndex}
          isSelected={hoveredTiles[`${colIndex},${rowIndex}`]}
          hoverCallback={hoverCallback}
        />
      ))}
    </div>
  );
};

export const generateGameField = ({
  fieldSize,
  hoveredTiles,
  hoverCallback,
}: GenerateGameField): JSX.Element => {
  return (
    <>
      {Array.from({ length: fieldSize }, (_, rowIndex) =>
        generateFieldRow({ rowIndex, fieldSize, hoveredTiles, hoverCallback })
      )}
    </>
  );
};
