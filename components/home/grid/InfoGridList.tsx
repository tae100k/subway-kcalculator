import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { InfoType } from "../../../types/const";
import InfoGridItem from "./InfoGridItem";

interface InfoGridListProps {
  title: string;
  gridItems: InfoType[];
  addedItems: InfoType[];
  handleItems: (items: InfoType) => void;
}

const InfoGridList: React.FC<InfoGridListProps> = ({
  title,
  gridItems,
  addedItems,
  handleItems,
}) => {
  const checkIsSelected = (items: InfoType) => {
    return Boolean(
      addedItems.find(
        (addedItem) =>
          addedItem.id === items.id && addedItem.category === items.category
      )
    );
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} mb={10}>
      <Text
        textStyle={title === "Extra cheese" ? "body" : "title"}
        color="Green.20"
      >
        {title}
      </Text>
      <Box>
        <Grid
          templateColumns={title === "Size" ? `1fr 2fr` : `repeat(3, 1fr)`}
          gap={2}
        >
          {gridItems.map((items) => {
            return (
              <InfoGridItem
                key={items.id}
                category={title}
                gridItems={items}
                isSelected={checkIsSelected(items)}
                handleClick={handleItems}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default InfoGridList;
