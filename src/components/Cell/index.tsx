import { memo } from "react";

import { Cell } from "./Cell";
import { CellContainerProps } from "./types";

export const CellContainer: React.FC<CellContainerProps> = memo(
  ({ isSelected, colIndex, rowIndex, hoverCallback }) => {
    const handleMouseEnter = () => {
      hoverCallback(colIndex, rowIndex);
    };

    return <Cell isSelected={isSelected} handleMouseEnter={handleMouseEnter} />;
  },
  (prevProps, nextProps) => {
    return prevProps.isSelected === nextProps.isSelected;
  }
);
