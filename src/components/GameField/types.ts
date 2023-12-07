import { HoveredTiles } from "../../types";

export interface GameFieldContainerProps {
  fieldSize: number;
  isDataLoading: boolean;
  hoveredTiles: HoveredTiles;
  hoverCallback: (colIndex: number, rowIndex: number) => void;
}

export interface GameFieldProps extends GameFieldContainerProps {}
