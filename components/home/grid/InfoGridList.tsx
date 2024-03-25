import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { InfoType, SandwichCategory, titleMapper } from "../../../types/const";
import InfoGridItem from "./InfoGridItem";

interface InfoGridListProps {
  title: SandwichCategory;
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
        textStyle={["extracheese"].includes(title) ? "body" : "title"}
        color="Green.20"
      >
        {titleMapper[title]}
      </Text>
      <Box>
        <Grid
          templateColumns={
            title === SandwichCategory.Size ? `1fr 2fr` : `repeat(3, 1fr)`
          }
          gap={2}
        >
          {gridItems.map((item) => {
            return (
              <InfoGridItem
                key={`${item.category}${item.title}`}
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
