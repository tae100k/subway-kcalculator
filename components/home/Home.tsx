import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { GridCategoryTitleList, infoType } from "../../types/const";
import AddedListPopup from "./added-list/AddedListPopup";
import InfoGridList from "./grid/InfoGridList";

interface HomeScreenProps {
  sandwich: infoType[];
  size: infoType[];
  bread: infoType[];
  veggies: infoType[];
  cheese: infoType[];
  extraCheese: infoType[];
  sauces: infoType[];
  extras: infoType[];
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  sandwich,
  size,
  bread,
  veggies,
  cheese,
  extraCheese,
  sauces,
  extras,
}) => {
  const [addedIngredients, setAddedIngredients] = useState<infoType[]>([]);
  const [selectedSandwich, setSelectedSandwich] = useState<infoType | null>(
    sandwich[0]
  );
  const [selectedSize, setSelectedSize] = useState<infoType | null>(size[0]);
  const [selectedBread, setSelectedBread] = useState<infoType | null>(bread[0]);
  const [isFirstPopup, setIsFirstPopup] = useState(true);
  const [index, setIndex] = useState<number>(1);
  // TODO: 다중선택이 되어야 하는 종류가 있고, 단일 선택이 되어야 하는 종류가 있는데 이를 구분해야함
  // const handleAddItems = (items: infoType) => {
  //   if (addedIngredients.some((addedItem) => addedItem.id === items.id)) {
  //     const newItemList = addedIngredients.filter(
  //       (addedItem) => addedItem.id !== items.id
  //     );
  //     setAddedIngredients(newItemList);
  //   } else {
  //     const newItemList = [...addedIngredients, items];
  //     setAddedIngredients(newItemList);
  //   }
  //   if (isFirstPopup) handleIndex(0);
  //   if (isFirstPopup === true) setIsFirstPopup(() => false);
  // };
  const handleAddItems = (items: infoType) => {
    // singleSelect(items);
    multiSelect(items);
    if (isFirstPopup) handleIndex(0);
    if (isFirstPopup === true) setIsFirstPopup(() => false);
  };

  // service 로직으로 이동해야 함.
  const singleSelect = () => {};

  const multiSelect = (items: infoType) => {
    if (addedIngredients.some((addedItem) => addedItem.id === items.id)) {
      const newItemList = addedIngredients.filter(
        (addedItem) => addedItem.id !== items.id
      );
      setAddedIngredients(newItemList);
    } else {
      const newItemList = [...addedIngredients, items];
      setAddedIngredients(newItemList);
    }
  };

  const handleIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  const resetAddedItems = () => {
    setAddedIngredients([]);
  };

  const chooseItems = (category: string) => {
    if (category === "sandwich") {
      return sandwich;
    }
    if (category === "size") {
      return size;
    }
    if (category === "bread") {
      return bread;
    }
    if (category === "veggies") {
      return veggies;
    }
    if (category === "cheese") {
      return cheese;
    }
    if (category === "extra cheese") {
      return extraCheese;
    }
    if (category === "sauces") {
      return sauces;
    }
    if (category === "extras") {
      return extras;
    }
  };

  return (
    <>
      <Box p={4} pb={"170px"}>
        {GridCategoryTitleList.map((category) => {
          return (
            <InfoGridList
              gridItems={chooseItems(category.toLocaleLowerCase()) ?? []}
              key={category}
              addedItems={addedIngredients}
              title={category}
              handleItems={handleAddItems}
            />
          );
        })}
      </Box>
      <AddedListPopup
        index={index}
        handleIndex={handleIndex}
        addedItems={addedIngredients}
        resetAddedItems={resetAddedItems}
      />
    </>
  );
};

export default HomeScreen;
