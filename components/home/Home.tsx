import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  isMultiSelect,
  isSingleSelect,
  toggleSelect,
} from "../../service/selection.service";
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
  const [selectedWholeItems, setSelectedWholeItems] = useState<infoType[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<infoType[]>(
    []
  );

  const [selectedSandwich, setSelectedSandwich] = useState<infoType | null>(
    null
  );
  const [selectedSize, setSelectedSize] = useState<infoType | null>(null);
  const [selectedBread, setSelectedBread] = useState<infoType | null>(null);

  const [isFirstPopup, setIsFirstPopup] = useState(true);
  const [index, setIndex] = useState<number>(1);

  const handleAddItems = (items: infoType) => {
    if (isSingleSelect(items)) {
      singleSelect(items);
    }
    if (isMultiSelect(items)) {
      multiSelect(items);
    }
    handlePopup();
  };

  useEffect(() => {
    const newSelectedWholeItems: infoType[] = [...selectedIngredients];
    if (selectedBread !== null) {
      newSelectedWholeItems.push(selectedBread);
    }
    if (selectedSandwich !== null) {
      newSelectedWholeItems.push(selectedSandwich);
    }
    if (selectedSize !== null) {
      newSelectedWholeItems.push(selectedSize);
    }
    setSelectedWholeItems(newSelectedWholeItems);
  }, [selectedBread, selectedIngredients, selectedSandwich, selectedSize]);

  const handlePopup = () => {
    if (isFirstPopup) handleIndex(0);
    if (isFirstPopup === true) setIsFirstPopup(() => false);
  };

  // service 로직으로 이동해야 함.
  const singleSelect = (items: infoType) => {
    if (items.category === "bread") {
      toggleSelect(items, selectedBread, setSelectedBread);
    }
    if (items.category === "size") {
      toggleSelect(items, selectedSize, setSelectedSize);
    }
    if (items.category === "sandwich") {
      toggleSelect(items, selectedSandwich, setSelectedSandwich);
    }
  };

  const multiSelect = (items: infoType) => {
    if (selectedIngredients.some((addedItem) => addedItem.id === items.id)) {
      const newItemList = selectedIngredients.filter(
        (addedItem) => addedItem.id !== items.id
      );
      setSelectedIngredients(newItemList);
    } else {
      const newItemList = [...selectedIngredients, items];
      setSelectedIngredients(newItemList);
    }
  };

  const handleIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  const resetAddedItems = () => {
    setSelectedWholeItems([]);
    setSelectedIngredients([]);
    setSelectedSandwich(null);
    setSelectedSize(null);
    setSelectedBread(null);
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
              addedItems={selectedWholeItems}
              title={category}
              handleItems={handleAddItems}
            />
          );
        })}
      </Box>
      <AddedListPopup
        index={index}
        handleIndex={handleIndex}
        addedItems={selectedWholeItems}
        resetAddedItems={resetAddedItems}
      />
    </>
  );
};

export default HomeScreen;
