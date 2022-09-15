import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { IngredientIcon } from "../../../public/assets/icons";
import { infoType } from "../../../types/sandwich";

interface InfoGridItemProps {
  gridItems: infoType;
  isSelected: boolean;
  onClick: (items: infoType) => void;
}

const InfoGridItem: React.FC<InfoGridItemProps> = ({
  gridItems,
  isSelected,
  onClick,
}) => {
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
      <IngredientIcon />
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
