import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { InfoType } from "../../../types/const";
import InfoGridItem from "./InfoGridItem";

interface InfoGridListProps {
  title: string;
  gridItems: InfoType[];
  onClickItem: (items: InfoType) => void;
  checkIsSelected: (items: InfoType) => boolean;
}

const InfoGridList: React.FC<InfoGridListProps> = ({
  title,
  gridItems,
  onClickItem,
  checkIsSelected,
}) => {
  return (
    <Box display="flex" flexDirection="column" gap={4} mb={10}>
      <Text
        textStyle={["Extra cheese"].includes(title) ? "body" : "title"}
        color="Green.20"
      >
        {title}
      </Text>
      <Box>
        <Grid
          templateColumns={title === "Size" ? `1fr 2fr` : `repeat(3, 1fr)`}
          gap={2}
        >
          {gridItems.map((item) => {
            return (
              <InfoGridItem
                key={item.id}
                category={title}
                item={item}
                isSelected={checkIsSelected(item)}
                onClickItem={onClickItem}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default InfoGridList;
