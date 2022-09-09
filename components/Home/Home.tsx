import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  getSandwichInfoList,
  getBreadInfoList,
  getVegetableInfoList,
  axiosFunc,
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
    console.log(vegetable);
  };

  const handleTest = () => {
    console.log(axiosFunc());
  };

  // useEffect(() => {
  //   const vegetable = getVegetableInfoList();

  //   if (vegetable) {
  //     setVegetables(vegetable);
  //   }
  // }, []);

  return (
    <div>
      <Button onClick={handleClickSandwich}>샌드위치 정보 버튼</Button>
      <Button onClick={handleClickBread}>빵 정보 버튼</Button>
      <Button onClick={handleTest}>test</Button>
      <Button onClick={handleClickVegetable}>야채 정보 버튼</Button>
    </div>
  );
};

console.log("End of Main Program");

export default HomeScreen;
