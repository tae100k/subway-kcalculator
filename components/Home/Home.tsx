import { Button } from "@chakra-ui/react";
import React from "react";
import {
  getSandwichInfoList,
  getIngredientCategoryList,
  getBreadInfoList,
} from "../../api/apiRequests";

const HomeScreen = () => {
  const handleClickSandwich = () => {
    getSandwichInfoList();
  };

  const handleClickCategory = () => {
    getIngredientCategoryList();
  };

  const handleClickBread = () => {
    getBreadInfoList();
  };
  return (
    <div>
      <Button onClick={handleClickSandwich}>샌드위치 정보 버튼</Button>
      <Button onClick={handleClickCategory}>카테고리 정보 버튼</Button>
      <Button onClick={handleClickBread}>빵 정보 버튼</Button>
    </div>
  );
};

console.log("End of Main Program");

export default HomeScreen;
