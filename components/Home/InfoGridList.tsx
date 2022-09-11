import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  getBreadInfoList,
  getCheeseInfoList,
  getSandwichInfoList,
  getSauceInfoList,
  getVegetableInfoList,
} from "../../api/apiRequests";
import { infoType } from "../../types/sandwich";
import InfoGridItem from "./InfoGridItem";

interface InfoGridListProps {
  title: string;
}

const InfoGridList: React.FC<InfoGridListProps> = ({ title }) => {
  const [gridItems, setGridItems] = useState<infoType[]>([]);

  const divideItemFunc = async (category: string) => {
    if (category === "sandwich") {
      return await getSandwichInfoList();
    }
    if (category === "bread") {
      return await getBreadInfoList();
    }
    if (category === "veggies") {
      return await getVegetableInfoList();
    }
    if (category === "cheese") {
      return await getCheeseInfoList();
    }
    if (category === "sauces") {
      return await getSauceInfoList();
    }
  };

  const handleInfo = async () => {
    const items = await divideItemFunc(title.toLowerCase());
    items && setGridItems(items);
  };

  useEffect(() => {
    handleInfo();
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={4} mb={10}>
      <Text textStyle="heading1">{title}</Text>
      <Box>
        <SimpleGrid columns={3} spacing={10}>
          {gridItems.map((items) => {
            return <InfoGridItem gridItems={items} key={items.title} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default InfoGridList;
