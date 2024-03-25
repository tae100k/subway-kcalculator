import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DEFAULT_SANDWICH_INFO_TYPE } from "../../pages";
import { isSingleSelect, toggleSelect } from "../../service/selection.service";
import { GridCategoryTitleList, InfoType } from "../../types/const";
import AddedListPopup from "./added-list/AddedListPopup";
import InfoGridList from "./grid/InfoGridList";

interface HomeScreenProps {
  sandwichInfo: DEFAULT_SANDWICH_INFO_TYPE;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ sandwichInfo }) => {
  const [selectedWholeItems, setSelectedWholeItems] = useState<InfoType[]>([]);

  const [isFirstPopup, setIsFirstPopup] = useState(true);
  const [index, setIndex] = useState<number>(1);

  const handleAddItems = (item: InfoType) => {
    if (isSingleSelect(item)) {
    } else {
    }
    handlePopup();
  };

  const handlePopup = () => {
    if (isFirstPopup) handleIndex(0);
    if (isFirstPopup === true) setIsFirstPopup(() => false);
  };

  const handleIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  const resetAddedItems = () => {
    setSelectedWholeItems([]);
  };

  const checkIsSelected = (items: InfoType) => {
    return Boolean(
      selectedWholeItems.find(
        (addedItem) =>
          addedItem.id === items.id && addedItem.category === items.category
      )
    );
  };

  return (
    <>
      <Box p={4} pb={"170px"}>
        {GridCategoryTitleList.map((category) => {
          const categoryKey = category.toLocaleLowerCase();
          return (
            <InfoGridList
              key={category}
              gridItems={sandwichInfo[categoryKey] ?? []}
              title={category}
              onClickItem={handleAddItems}
              checkIsSelected={checkIsSelected}
            />
          );
        })}
      </Box>
      <AddedListPopup
        index={index}
        handleIndex={handleIndex}
        addedItems={selectedWholeItems}
        resetAddedItems={resetAddedItems}
      />
    </>
  );
};

export default HomeScreen;
