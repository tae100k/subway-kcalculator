import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  getBreadInfoList,
  getCheeseInfoList,
  getSandwichInfoList,
  getSauceInfoList,
  getVegetableInfoList,
} from "../../api/apiRequests";
import { infoType } from "../../types/sandwich";

const HomeScreen = () => {
  const [sandwichTypes, setSandwichTypes] = useState<infoType[]>([]);
  const [breads, setBreads] = useState<infoType[]>([]);
  const [vegetables, setVegetables] = useState<infoType[]>([]);
  const [sauces, setSauces] = useState<infoType[]>([]);
  const [cheeses, setCheeses] = useState<infoType[]>([]);
  const [isSelectedCategory, setIsSelectedCategory] = useState("sandwichTypes");

  const handleClickSandwich = async () => {
    const sandwichType = await getSandwichInfoList();
    setSandwichTypes(sandwichType);
    setIsSelectedCategory("sandwichTypes");
  };

  const handleClickBread = async () => {
    const breads = await getBreadInfoList();
    setBreads(breads);
    setIsSelectedCategory("breads");
  };

  const handleClickVegetable = async () => {
    const vegetables = await getVegetableInfoList();
    setVegetables(vegetables);
    setIsSelectedCategory("vegetables");
  };

  const handleClickSauce = async () => {
    const sauces = await getSauceInfoList();
    setSauces(sauces);
    setIsSelectedCategory("sauces");
  };

  const handleClickCheese = async () => {
    const cheeses = await getCheeseInfoList();
    setCheeses(cheeses);
    setIsSelectedCategory("cheeses");
  };

  return (
    <>
      <Button onClick={handleClickSandwich}>샌드위치 정보 버튼</Button>
      <Button onClick={handleClickBread}>빵 정보 버튼</Button>
      <Button onClick={handleClickCheese}>치즈 정보 버튼</Button>
      <Button onClick={handleClickVegetable}>야채 정보 버튼</Button>
      <Button onClick={handleClickSauce}>소스 정보 버튼</Button>

      {isSelectedCategory === "sandwichTypes" &&
        sandwichTypes.map((item: infoType) => {
          return (
            <Text key={item.title}>
              {item.title} : {item.calories}
            </Text>
          );
        })}

      {isSelectedCategory === "breads" &&
        breads.map((item: infoType) => {
          return (
            <Text key={`${item.title}${item.calories}`}>
              {item.title} : {item.calories}
            </Text>
          );
        })}

      {isSelectedCategory === "cheeses" &&
        cheeses.map((item: infoType) => {
          return (
            <Text key={item.title}>
              {item.title} : {item.calories}
            </Text>
          );
        })}

      {isSelectedCategory === "vegetables" &&
        vegetables.map((item: infoType) => {
          return (
            <Text key={item.title}>
              {item.title} : {item.calories}
            </Text>
          );
        })}

      {isSelectedCategory === "sauces" &&
        sauces.map((item: infoType) => {
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
