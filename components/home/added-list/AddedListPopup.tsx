import { Container, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { infoType } from "../../../types/sandwich";
import AddedListAccordion from "./AddedListAccordion";

interface AddedListPopupProps {
  addedItems: infoType[];
  resetAddedItems: () => void;
}

const AddedListPopup: React.FC<AddedListPopupProps> = ({
  addedItems,
  resetAddedItems,
}) => {
  const [currentTotalNumber, setCurrentTotalNumber] = useState<number>(1000);

  useEffect(() => {
    const itemCaloryList = addedItems.map((item) => {
      if (item.title === "Flat Bread") {
        return Number(item.calories.split(" ")[0]) / 2;
      }
      return Number(item.calories.split(" ")[0]);
    });
    const itemCaloryTotal = itemCaloryList.reduce((a, b) => a + b, 0);
    setCurrentTotalNumber(Number(itemCaloryTotal.toFixed(1)));
  }, [addedItems]);

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
        <AddedListAccordion addedItems={addedItems} />
        <Text textStyle="body1" mt={4} px={"16px"}>
          Total
        </Text>
        <Flex
          px={"16px"}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Flex flexDirection="row" alignItems="baseline" gap={3} pb={"8px"}>
            <Text textStyle="display1">
              {currentTotalNumber.toString().padStart(3, "0")}
            </Text>
            <Text textStyle="body1">Kcal</Text>
          </Flex>
          <Text textStyle="body1" onClick={resetAddedItems}>
            Reset
          </Text>
        </Flex>
      </Container>
    </div>
  );
};

export default AddedListPopup;
