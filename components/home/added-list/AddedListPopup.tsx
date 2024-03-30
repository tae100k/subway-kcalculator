import { Container, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { isDoubled } from "../../../service/exception.service";
import { InfoType } from "../../../types/const";
import { asyncedScrollToTop } from "../../../utils/scroll";
import AddedListAccordion from "./AddedListAccordion";

interface AddedListPopupProps {
  addedItems: InfoType[];
  index: number;
  resetAddedItems: () => void;
  handleIndex: (newIndex: number) => void;
}

const AddedListPopup: React.FC<AddedListPopupProps> = ({
  addedItems,
  index,
  handleIndex,
  resetAddedItems,
}) => {
  const itemCaloriesList = addedItems.map((item) => {
    return Number(item.calories.split(" ")[0]);
  });

  const itemCaloryTotal = itemCaloriesList.reduce((a, b) => a + b, 0);

  const totalCalories = isDoubled(addedItems)
    ? Number((itemCaloryTotal * 2).toFixed(1))
    : Number(itemCaloryTotal.toFixed(1));

  const onReset = () => {
    handleIndex(1);
    resetAddedItems();
    asyncedScrollToTop();
  };

  return (
    <div>
      <Container
        bg="Green.10"
        p={0}
        position="fixed"
        w="100%"
        left={0}
        right={0}
        bottom={0}
      >
        <AddedListAccordion
          index={index}
          addedItems={addedItems}
          handleIndex={handleIndex}
        />
        <Text textStyle="body" mt={4} px={"16px"}>
          Total
        </Text>
        <Flex
          px={"16px"}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Flex flexDirection="row" alignItems="baseline" gap={3} pb={"8px"}>
            <Text textStyle="display">
              {totalCalories.toString().padStart(3, "0")}
            </Text>
            <Text textStyle="body">kcal</Text>
          </Flex>
          <Text
            cursor="pointer"
            onClick={onReset}
            textStyle="body"
            _hover={{ color: "Yellow.10" }}
          >
            Reset
          </Text>
        </Flex>
      </Container>
    </div>
  );
};

export default AddedListPopup;
