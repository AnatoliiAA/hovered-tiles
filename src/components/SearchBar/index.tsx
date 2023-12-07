import { SearchBar } from "./SearchBar";
import { SearchBarContainerProps } from "./types";

export const SearchBarContainer: React.FC<SearchBarContainerProps> = ({
  selectOptions,
  handleStartGame,
  handleChangeDifficulty,
}) => {
  return (
    <SearchBar
      selectOptions={selectOptions}
      handleStartGame={handleStartGame}
      handleChangeDifficulty={handleChangeDifficulty}
    />
  );
};
