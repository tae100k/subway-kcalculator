import { Box, GridItem, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { handleSVGCategory } from "../../../public/assets/ingredients/SVG";
import { InfoType } from "../../../types/const";
import Image from "next/image";

interface InfoGridItemProps {
  category: string;
  item: InfoType;
  isSelected: boolean;
  onClickItem: (items: InfoType) => void;
}

const InfoGridItem: React.FC<InfoGridItemProps> = ({
  category,
  item,
  isSelected,
  onClickItem,
}) => {
  const handleSVG = (category: string, title: string) => {
    return handleSVGCategory(category, title);
  };

  const onClick = () => {
    onClickItem(item);
  };
  const newImageSrc = "/assets/icons/new-icon.png";

  return (
    <GridItem
      gap="12px"
      display="flex"
      alignItems="center"
      flexDirection="column"
      onClick={onClick}
      pt={3.5}
      px={2}
      pb={2}
      bg={isSelected ? "White" : "initial"}
      borderRadius={"20px"}
      cursor="pointer"
      // _hover={{
      //   bg: "White",
      //   boxShadow: "0px 4px 16px -10px rgba(0, 0, 0, 0.08)",
      // }}
      boxShadow={isSelected ? "0px 4px 16px -10px rgba(0, 0, 0, 0.08)" : "none"}
    >
      {["Egg Slice", "Spicy Shrimp"].includes(item.title) ? (
        <Image
          src={newImageSrc}
          width={50}
          height={50}
          objectFit="contain"
          alt="this is a new menu"
        />
      ) : (
        <Icon
          as={handleSVG(category, item.title)}
          h={"50px"}
          w={["30cm"].includes(item.title) ? "100px" : "50px"}
        />
      )}
      <Box display="flex" flexGrow="1" alignItems="center">
        <Text
          align="center"
          textStyle="label"
          color={isSelected ? "Green.10" : "Gray.50"}
        >
          {item.title}
        </Text>
      </Box>
    </GridItem>
  );
};

export default InfoGridItem;
