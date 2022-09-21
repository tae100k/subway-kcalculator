import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IngredientIcon } from "../../../public/assets/icons";
import { handleSVGCategory } from "../../../public/assets/ingredients/SVG";
import { infoType } from "../../../types/sandwich";

interface InfoGridItemProps {
  category: string;
  gridItems: infoType;
  isSelected: boolean;
  onClick: (items: infoType) => void;
}

const InfoGridItem: React.FC<InfoGridItemProps> = ({
  category,
  gridItems,
  isSelected,
  onClick,
}) => {
  const handleSVG = (category: string, title: string) => {
    return handleSVGCategory(category, title);
  };
  const handleClick = () => {
    onClick(gridItems);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      onClick={handleClick}
      pt={3.5}
      px={2}
      pb={2}
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
    </Box>
  );
};

export default InfoGridItem;
