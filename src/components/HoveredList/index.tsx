import { HoveredList } from "./HoveredList";
import { HoveredListContainerProps } from "./types";

export const HoveredListContainer: React.FC<HoveredListContainerProps> = ({
  hoveredTiles,
}) => {
  return <HoveredList hoveredTiles={hoveredTiles} />;
};
