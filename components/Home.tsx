import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { GridCategoryTitleList, infoType } from "../types/sandwich";
import AddedListPopup from "./AddedListPopup";
import InfoGridList from "./InfoGridList";

const HomeScreen = () => {
  const [addedItems, setAddedItems] = useState<infoType[]>([]);

  const addItems = (items: infoType) => {
    setAddedItems([...addedItems, items]);
  };

  return (
    <>
      <Box p={4} pb={"158px"}>
        {GridCategoryTitleList.map((category) => {
          return (
            <InfoGridList
              key={category}
              title={category}
              handleItems={addItems}
            />
          );
        })}
      </Box>
      <AddedListPopup addedItems={addedItems} />
    </>
  );
};

export default HomeScreen;
