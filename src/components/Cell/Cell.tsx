import classNames from "classnames";

import styles from "./Cell.module.css";
import { CellProps } from "./types";

export const Cell: React.FC<CellProps> = ({ isSelected, handleMouseEnter }) => {
  return (
    <div
      className={classNames(styles.cell, {
        [styles.cell__selected]: isSelected,
      })}
      onMouseEnter={handleMouseEnter}
    />
  );
};
