import { useCallback, useEffect, useState } from "react";

import { FetchGameDataResponse, HoveredTiles, SelectOption } from "../../types";
import { getKeyFromPosition } from "../../helpers/common";

import { TilesGame } from "./TilesGame";

export const TilesGameContainer = () => {
  const [fieldSize, setFieldSize] = useState<number>(0);
  const [selectedFieldSize, setSelectedFieldSize] = useState<number>(0);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  const [selectOptions, setSelectOptions] = useState<SelectOption[]>([]);
  const [hoveredTiles, setHoveredTiles] = useState<HoveredTiles>({});

  useEffect(() => {
    const fetchGameData = async () => {
      setIsDataLoading(true);
      try {
        const response = await fetch(
          "https://60816d9073292b0017cdd833.mockapi.io/modes"
        );

        if (response.ok) {
          const newGameData: FetchGameDataResponse[] = await response.json();
          const newSelectOptions = newGameData.map(({ field, name, id }) => {
            return { name, id, fieldSize: field };
          });
          setSelectOptions(newSelectOptions);
          setSelectedFieldSize(newSelectOptions[0].fieldSize);
          setIsDataLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsDataLoading(false);
      }
    };
    fetchGameData();
  }, []);

  const handleChangeDifficulty = (newFieldSize: number) => {
    setSelectedFieldSize(newFieldSize);
  };

  const handleStartGame = () => {
    setHoveredTiles({});
    setFieldSize(selectedFieldSize);
  };

  const handleTileHover = useCallback((colIndex: number, rowIndex: number) => {
    setHoveredTiles((prevValue) => {
      const newValue = { ...prevValue };
      const key = getKeyFromPosition(colIndex, rowIndex);
      if (key in newValue) {
        delete newValue[key];
        return newValue;
      }
      newValue[key] = true;
      return newValue;
    });
  }, []);

  return (
    <TilesGame
      fieldSize={fieldSize}
      isDataLoading={isDataLoading}
      selectOptions={selectOptions}
      hoveredTiles={hoveredTiles}
      handleChangeDifficulty={handleChangeDifficulty}
      handleStartGame={handleStartGame}
      handleTileHover={handleTileHover}
    />
  );
};
