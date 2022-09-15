import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  getBreadInfoList,
  getCheeseInfoList,
  getExtraToppingInfoList,
  getSandwichInfoList,
  getSauceInfoList,
  getVegetableInfoList,
} from "../../../api/apiRequests";
import { breadList, infoType } from "../../../types/sandwich";
import InfoGridItem from "./InfoGridItem";

interface InfoGridListProps {
  title: string;
  addedItems: infoType[];
  handleItems: (items: infoType) => void;
}

const InfoGridList: React.FC<InfoGridListProps> = ({
  title,
  addedItems,
  handleItems,
}) => {
  const [gridItems, setGridItems] = useState<infoType[]>([]);

  const divideItemFunc = async (category: string) => {
    if (category === "sandwich") {
      return await getSandwichInfoList();
    }
    if (category === "size") {
      return breadList;
    }
    if (category === "bread") {
      return await getBreadInfoList();
    }
    if (category === "veggies") {
      return await getVegetableInfoList();
    }
    if (category === "cheese" || category === "extra cheese") {
      return await getCheeseInfoList();
    }
    if (category === "sauces") {
      return await getSauceInfoList();
    }
    if (category === "extras") {
      return await getExtraToppingInfoList();
    }
  };

  const handleInfo = async () => {
    const items = await divideItemFunc(title.toLowerCase());
    items && setGridItems(items);
  };

  useEffect(() => {
    handleInfo();
  }, []);

  const checkIsSelected = (items: infoType) => {
    return Boolean(addedItems.find((addedItem) => addedItem.id === items.id));
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} mb={10}>
      <Text
        textStyle={title === "Extra cheese" ? "body1" : "heading1"}
        color="Green.20"
      >
        {title}
      </Text>
      <Box>
        <SimpleGrid columns={3} spacing={2}>
          {gridItems.map((items) => {
            return (
              <InfoGridItem
                key={items.id}
                gridItems={items}
                isSelected={checkIsSelected(items)}
                onClick={handleItems}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default InfoGridList;
