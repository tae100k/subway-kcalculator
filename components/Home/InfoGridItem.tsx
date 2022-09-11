import { Box, grid, Text } from "@chakra-ui/react";
import React from "react";
import { infoType } from "../../types/sandwich";

interface InfoGridItemProps {
  gridItems: infoType;
}

const InfoGridItem: React.FC<InfoGridItemProps> = ({ gridItems }) => {
  return (
    <Box>
      <Text>{gridItems.title}</Text>
      <Text>{gridItems.calories}</Text>
    </Box>
  );
};

export default InfoGridItem;
