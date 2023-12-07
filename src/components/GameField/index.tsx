import { GameField } from "./GameField";
import { GameFieldContainerProps } from "./types";

export const GameFieldContainer: React.FC<GameFieldContainerProps> = ({
  fieldSize,
  isDataLoading,
  hoveredTiles,
  hoverCallback,
}) => {
  return (
    <GameField
      fieldSize={fieldSize}
      isDataLoading={isDataLoading}
      hoveredTiles={hoveredTiles}
      hoverCallback={hoverCallback}
    />
  );
};
