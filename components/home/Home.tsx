import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { DEFAULT_SANDWICH_INFO_TYPE } from "../../pages";
import { isSingleSelect } from "../../service/selection.service";
import { GridCategoryTitleList, InfoType } from "../../types/const";
import AddedListPopup from "./added-list/AddedListPopup";
import InfoGridList from "./grid/InfoGridList";
import { filter } from "cheerio/lib/api/traversing";

interface HomeScreenProps {
  sandwichInfo: DEFAULT_SANDWICH_INFO_TYPE;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ sandwichInfo }) => {
  const [selectedItems, setSelectedItems] = useState<InfoType[]>([]);

  const [isFirstPopup, setIsFirstPopup] = useState(true);
  const [index, setIndex] = useState<number>(1);

  const handleAddItems = (newItem: InfoType) => {
    const category = newItem.category;
    const isSelected = checkIsSelected(newItem);

    // single
    if (isSingleSelect(category)) {
      if (isSelected) {
        const newSelectedItems = selectedItems.filter(
          (item) => item.title !== newItem.title || item.category !== category
        );
        setSelectedItems(newSelectedItems);
      } else {
        const newSelectedItems = selectedItems.filter(
          (item) => item.category !== category
        );
        setSelectedItems([...newSelectedItems, newItem]);
      }
      return;
    }

    // multi
    if (isSelected) {
      const newSelectedItems = selectedItems.filter(
        (item) => item.title !== newItem.title || item.category !== category
      );
      setSelectedItems(newSelectedItems);
    } else {
      setSelectedItems([...selectedItems, newItem]);
    }

    handlePopup();
  };

  const handlePopup = () => {
    if (isFirstPopup) {
      handleIndex(0);
      setIsFirstPopup(false);
    }
  };

  const handleIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  const resetAddedItems = () => {
    setSelectedItems([]);
  };

  const checkIsSelected = (items: InfoType) => {
    return Boolean(
      selectedItems.find(
        (addedItem) =>
          addedItem.title === items.title &&
          addedItem.category === items.category
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
        addedItems={selectedItems}
        resetAddedItems={resetAddedItems}
      />
    </>
  );
};

export default HomeScreen;
