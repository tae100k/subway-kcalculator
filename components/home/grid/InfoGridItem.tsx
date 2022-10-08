import { Box, GridItem, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { handleSVGCategory } from "../../../public/assets/ingredients/SVG";
import { infoType } from "../../../types/sandwich";

interface InfoGridItemProps {
  category: string;
  gridItems: infoType;
  isSelected: boolean;
  handleClick: (items: infoType) => void;
}
const InfoGridItem: React.FC<InfoGridItemProps> = ({
  category,
  gridItems,
  isSelected,
  handleClick,
}) => {
  const handleSVG = (category: string, title: string) => {
    return handleSVGCategory(category, title);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (e.cancelable) {
      e.preventDefault();
      onClick();
    }
  };

  const onClick = () => {
    handleClick(gridItems);
  };

  return (
    <GridItem
      gap="12px"
      onTouchEnd={onTouchEnd}
      display="flex"
      alignItems="center"
      flexDirection="column"
      onClick={onClick}
      pt={3.5}
      px={2}
      pb={2}
      bg={isSelected ? "White" : "initial"}
      borderRadius={"20px"}
      _hover={{
        bg: "White",
        boxShadow: "0px 4px 16px -10px rgba(0, 0, 0, 0.08)",
      }}
      boxShadow={isSelected ? "0px 4px 16px -10px rgba(0, 0, 0, 0.08)" : "none"}
    >
      {/* TODO: image위에 마진 살짝 두기 */}
      <Icon
        as={handleSVG(category, gridItems.title)}
        h={"50px"}
        w={gridItems.title === "30cm" ? "100px" : "50px"}
      />
      <Box display="flex" flexGrow="1" alignItems="center">
        <Text
          align="center"
          textStyle="label1"
          color={isSelected ? "Green.10" : "Gray.50"}
        >
          {gridItems.title}
        </Text>
      </Box>
    </GridItem>
  );
};

export default InfoGridItem;
