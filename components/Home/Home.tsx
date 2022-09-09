import { Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  getSandwichInfoList,
  getBreadInfoList,
  getVegetableInfoList,
} from "../../api/apiRequests";
import { infoType } from "../../types/sandwich";

const HomeScreen = () => {
  const [vegetables, setVegetables] = useState<infoType[]>([]);

  const handleClickSandwich = () => {
    getSandwichInfoList();
  };

  const handleClickBread = () => {
    getBreadInfoList();
  };

  const handleClickVegetable = async () => {
    const vegetable = await getVegetableInfoList();
    setVegetables(vegetable);
  };

  return (
    <>
      <Button onClick={handleClickSandwich}>샌드위치 정보 버튼</Button>
      <Button onClick={handleClickBread}>빵 정보 버튼</Button>
      <Button onClick={handleClickVegetable}>야채 정보 버튼</Button>
      {vegetables.map((item: infoType) => {
        return (
          <Text key={item.title}>
            {item.title} : {item.calories}
          </Text>
        );
      })}
    </>
  );
};

export default HomeScreen;
