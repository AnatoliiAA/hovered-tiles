import { HoveredTiles, SelectOption } from "../../types";

export interface TilesGameProps {
  fieldSize: number;
  isDataLoading: boolean;
  selectOptions: SelectOption[];
  hoveredTiles: HoveredTiles;
  handleStartGame: VoidFunction;
  handleChangeDifficulty: (newFieldSize: number) => void;
  handleTileHover: (colIndex: number, rowIndex: number) => void;
}
