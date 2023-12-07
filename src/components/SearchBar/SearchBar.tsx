import styles from "./SearchBar.module.css";
import { SearchBarContainerProps } from "./types";

export const SearchBar: React.FC<SearchBarContainerProps> = ({
  selectOptions,
  handleStartGame,
  handleChangeDifficulty,
}) => {
  return (
    <section className={styles.container}>
      <select
        className={styles.select}
        onChange={(e) => handleChangeDifficulty(Number(e.target.value))}
      >
        {selectOptions?.length > 0
          ? selectOptions.map((selectOption) => {
              return (
                <option key={selectOption.id} value={selectOption.fieldSize}>
                  {selectOption.name}
                </option>
              );
            })
          : null}
      </select>

      <button
        type="button"
        className={styles.startButton}
        onClick={handleStartGame}
      >
        Start
      </button>
    </section>
  );
};
