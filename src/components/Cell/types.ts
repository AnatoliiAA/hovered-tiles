export interface CellContainerProps {
  colIndex: number;
  rowIndex: number;
  isSelected: boolean;
  hoverCallback: (colIndex: number, rowIndex: number) => void;
}

export interface CellProps extends Pick<CellContainerProps, "isSelected"> {
  handleMouseEnter: VoidFunction;
}
