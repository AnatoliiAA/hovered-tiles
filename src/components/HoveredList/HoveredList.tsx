import { getPositionFromKey } from "../../helpers/common";

import styles from "./HoveredList.module.css";
import { HoveredListProps } from "./types";

export const HoveredList: React.FC<HoveredListProps> = ({ hoveredTiles }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Hovered Tiles</h1>
      <ul className={styles.list}>
        {Object.keys(hoveredTiles).map((key) => {
          const [colIndex, rowIndex] = getPositionFromKey(key);
          return (
            <li key={key} className={styles.listItem}>{`Tile at ${
              Number(colIndex) + 1
            }, ${Number(rowIndex) + 1} is hovered`}</li>
          );
        })}
      </ul>
    </section>
  );
};
