import { Center, Text } from "@chakra-ui/react";
import React from "react";
import { infoType } from "../types/sandwich";

interface InfoGridItemProps {
  gridItems: infoType;
  onClick: (items: infoType) => void;
}

const InfoGridItem: React.FC<InfoGridItemProps> = ({ gridItems, onClick }) => {
  const handleClick = () => {
    onClick(gridItems);
  };

  return (
    <Center border="1px" onClick={handleClick}>
      <Text textStyle="label1">{gridItems.title}</Text>
    </Center>
  );
};

export default InfoGridItem;
