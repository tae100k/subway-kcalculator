import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DEFAULT_SANDWICH_INFO_TYPE } from "../../pages";
import { isSingleSelect, toggleSelect } from "../../service/selection.service";
import { GridCategoryTitleList, InfoType } from "../../types/const";
import AddedListPopup from "./added-list/AddedListPopup";
import InfoGridList from "./grid/InfoGridList";

interface HomeScreenProps {
  sandwichInfo: DEFAULT_SANDWICH_INFO_TYPE;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ sandwichInfo }) => {
  const [selectedWholeItems, setSelectedWholeItems] = useState<InfoType[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<InfoType[]>(
    []
  );
  const [selectedSandwich, setSelectedSandwich] = useState<InfoType | null>(
    null
  );
  const [selectedSize, setSelectedSize] = useState<InfoType | null>(null);
  const [selectedBread, setSelectedBread] = useState<InfoType | null>(null);
  const [isFirstPopup, setIsFirstPopup] = useState(true);
  const [index, setIndex] = useState<number>(1);

  const handleAddItems = (items: InfoType) => {
    if (isSingleSelect(items)) {
      singleSelect(items);
    } else {
      multiSelect(items);
    }
    handlePopup();
  };

  useEffect(() => {
    const newSelectedWholeItems: InfoType[] = [...selectedIngredients];
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
  const singleSelect = (items: InfoType) => {
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

  const multiSelect = (items: InfoType) => {
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
      return sandwichInfo.sandwich;
    }
    if (category === "size") {
      return sandwichInfo.size;
    }
    if (category === "bread") {
      return sandwichInfo.bread;
    }
    if (category === "veggies") {
      return sandwichInfo.veggies;
    }
    if (category === "cheese") {
      return sandwichInfo.cheese;
    }
    if (category === "extra cheese") {
      return sandwichInfo.extraCheese;
    }
    if (category === "sauces") {
      return sandwichInfo.sauces;
    }
    if (category === "extras") {
      return sandwichInfo.extras;
    }
  };

  return (
    <>
      <Box p={4} pb={"170px"}>
        {GridCategoryTitleList.map((category) => {
          return (
            <InfoGridList
              key={category}
              gridItems={chooseItems(category.toLocaleLowerCase()) ?? []}
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
