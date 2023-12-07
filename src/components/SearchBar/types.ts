import { SelectOption } from "../../types";

export interface SearchBarContainerProps {
  selectOptions: SelectOption[];
  handleStartGame: VoidFunction;
  handleChangeDifficulty: (newFieldSize: number) => void;
}

export interface SearchBarProps extends SearchBarContainerProps {}
