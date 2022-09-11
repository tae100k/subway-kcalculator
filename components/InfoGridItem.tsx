import { Center, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { infoType } from "../types/sandwich";

interface InfoGridItemProps {
  gridItems: infoType;
  onClick: (items: infoType) => void;
}

const InfoGridItem: React.FC<InfoGridItemProps> = ({ gridItems, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    onClick(gridItems);
    setIsSelected(!isSelected);
  };

  return (
    <Center border="1px" onClick={handleClick}>
      <Text textStyle="label1" color={isSelected ? "Green.10" : "Gray.50"}>
        {gridItems.title}
      </Text>
    </Center>
  );
};

export default InfoGridItem;
