export interface FetchGameDataResponse {
  name: string;
  field: number;
  id: string;
}

export interface SelectOption {
  name: string;
  fieldSize: number;
  id: string;
}

export interface GenerateGameField {
  fieldSize: number;
  hoveredTiles: HoveredTiles;
  hoverCallback: (colIndex: number, rowIndex: number) => void;
}

export interface GenerateGameRow extends GenerateGameField {
  rowIndex: number;
}

export interface HoveredTiles {
  [name: string]: boolean;
}
