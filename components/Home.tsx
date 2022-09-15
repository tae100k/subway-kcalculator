import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { GridCategoryTitleList, infoType } from "../types/sandwich";
import AddedListPopup from "./AddedListPopup";
import InfoGridList from "./InfoGridList";

const HomeScreen = () => {
  const [addedItems, setAddedItems] = useState<infoType[]>([]);
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
  };

  const resetAddedItems = () => {
    setAddedItems([]);
  };

  return (
    <>
      <Box p={4} pb={"206px"}>
        {GridCategoryTitleList.map((category) => {
          return (
            <InfoGridList
              addedItems={addedItems}
              key={category}
              title={category}
              handleItems={handleAddItems}
            />
          );
        })}
      </Box>
      <AddedListPopup
        addedItems={addedItems}
        resetAddedItems={resetAddedItems}
      />
    </>
  );
};

export default HomeScreen;
