import { GameFieldContainer } from "../GameField";
import { HoveredListContainer } from "../HoveredList";
import { SearchBarContainer } from "../SearchBar";

import styles from "./TilesGame.module.css";
import { TilesGameProps } from "./types";

export const TilesGame: React.FC<TilesGameProps> = ({
  fieldSize,
  isDataLoading,
  selectOptions,
  hoveredTiles,
  handleStartGame,
  handleChangeDifficulty,
  handleTileHover,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <SearchBarContainer
          selectOptions={selectOptions}
          handleChangeDifficulty={handleChangeDifficulty}
          handleStartGame={handleStartGame}
        />
        <GameFieldContainer
          fieldSize={fieldSize}
          isDataLoading={isDataLoading}
          hoveredTiles={hoveredTiles}
          hoverCallback={handleTileHover}
        />
      </div>
      <HoveredListContainer hoveredTiles={hoveredTiles} />
    </div>
  );
};
