import { generateGameField } from "../../helpers/gameField";

import styles from "./GameField.module.css";
import { GameFieldProps } from "./types";

export const GameField: React.FC<GameFieldProps> = ({
  fieldSize,
  isDataLoading,
  hoveredTiles,
  hoverCallback,
}) => {
  return isDataLoading ? (
    <p>Loading</p>
  ) : (
    <div className={styles.field}>
      {generateGameField({ fieldSize, hoveredTiles, hoverCallback })}
    </div>
  );
};
