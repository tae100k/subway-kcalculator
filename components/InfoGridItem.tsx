import { Box, Text, Center } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { Layer } from "../public/assets/icons";
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
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      onClick={handleClick}
      pt={"14px"}
      px={"8px"}
      pb={"8px"}
    >
      {/* TODO: image위에 마진 살짝 두기 */}
      <Image src={Layer} width={50} height={50} alt="ingredient icon" />
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
