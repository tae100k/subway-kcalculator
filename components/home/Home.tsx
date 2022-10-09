import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { GridCategoryTitleList, infoType } from "../../types/sandwich";
import AddedListPopup from "./added-list/AddedListPopup";
import InfoGridList from "./grid/InfoGridList";

interface HomeScreenProps {
  sandwich: infoType[];
  size: infoType[];
  bread: infoType[];
  veggies: infoType[];
  cheese: infoType[];
  sauces: infoType[];
  extras: infoType[];
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  sandwich,
  size,
  bread,
  veggies,
  cheese,
  sauces,
  extras,
}) => {
  const [addedItems, setAddedItems] = useState<infoType[]>([]);
  const [isFirstPopup, setIsFirstPopup] = useState(true);
  const [index, setIndex] = useState<number>(1);
  // TODO: 다중선택이 되어야 하는 종류가 있고, 단일 선택이 되어야 하는 종류가 있는데 이를 구분해야함
  const handleAddItems = (items: infoType) => {
    if (addedItems.some((addedItem) => addedItem.id === items.id)) {
      const newItemList = addedItems.filter(
        (addedItem) => addedItem.id !== items.id
      );
      setAddedItems(newItemList);
    } else {
      const newItemList = [...addedItems, items];
      setAddedItems(newItemList);
    }
    if (isFirstPopup) handleIndex(0);
    if (isFirstPopup === true) setIsFirstPopup(() => false);
  };

  const handleIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  const resetAddedItems = () => {
    setAddedItems([]);
  };

  const chooseItems = (category: string) => {
    if (category === "sandwich") {
      return sandwich;
    }
    if (category === "size") {
      return size;
    }
    if (category === "bread") {
      return bread;
    }
    if (category === "veggies") {
      return veggies;
    }
    if (category === "cheese" || category === "extra cheese") {
      return cheese;
    }
    if (category === "sauces") {
      return sauces;
    }
    if (category === "extras") {
      return extras;
    }
  };

  return (
    <>
      <Box p={4} pb={"170px"}>
        {GridCategoryTitleList.map((category) => {
          return (
            <InfoGridList
              gridItems={chooseItems(category.toLocaleLowerCase()) ?? []}
              key={category}
              addedItems={addedItems}
              title={category}
              handleItems={handleAddItems}
            />
          );
        })}
      </Box>
      <AddedListPopup
        index={index}
        handleIndex={handleIndex}
        addedItems={addedItems}
        resetAddedItems={resetAddedItems}
      />
    </>
  );
};

export default HomeScreen;
