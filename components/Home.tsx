import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { GridCategoryTitleList, infoType } from "../types/sandwich";
import AddedListPopup from "./AddedListPopup";
import InfoGridList from "./InfoGridList";

const HomeScreen = () => {
  const [addedItems, setAddedItems] = useState<infoType[]>([]);

  const handleAddItems = (items: infoType) => {
    if (addedItems.some((addedItem) => addedItem.title === items.title)) {
      const newItemList = addedItems.filter(
        (addedItem) => addedItem.title !== items.title
      );
      setAddedItems(newItemList);
    } else {
      const newItemList = [...addedItems, items];
      setAddedItems(newItemList);
    }
  };

  return (
    <>
      <Box p={4} pb={"158px"}>
        {GridCategoryTitleList.map((category) => {
          return (
            <InfoGridList
              key={category}
              title={category}
              handleItems={handleAddItems}
            />
          );
        })}
      </Box>
      <AddedListPopup addedItems={addedItems} />
    </>
  );
};

export default HomeScreen;
