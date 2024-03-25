import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ArrowDown, ArrowUp } from "../../../public/assets/icons";
import { isDoubled } from "../../../service/exception.service";
import { InfoType } from "../../../types/const";

interface AddedListAccordionProps {
  addedItems: InfoType[];
  index: number;
  handleIndex: (newIndex: number) => void;
}

const AddedListAccordion: React.FC<AddedListAccordionProps> = ({
  addedItems,
  index,
  handleIndex,
}) => {
  const handleSpecialCalories = (item: InfoType) => {
    // 리팩토링 해야함.
    if (item.title === "Flat Bread") {
      return Number(item.calories.split(" ")[0]) / 2;
    }
    return Number(item.calories.split(" ")[0]);
  };

  const handleChange = () => {
    if (index === 0) handleIndex(1);
    if (index === 1) handleIndex(0);
  };

  return (
    <Accordion allowMultiple index={index} onClick={handleChange}>
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <>
            <AccordionButton
              py={"4px"}
              color="white"
              display="flex"
              justifyContent="center"
              bg={"Green.20"}
              _hover={{ bg: isExpanded ? "Green.20" : "Green.10" }}
            >
              {isExpanded ? <ArrowDown /> : <ArrowUp />}
            </AccordionButton>
            <AccordionPanel
              mx={"24px"}
              mt={"16px"}
              mb={"8px"}
              borderBottom="2px"
              borderBottomColor="Grayscale.10"
            >
              {isDoubled(addedItems) && (
                <Flex>
                  <Text textStyle="body">(</Text>
                </Flex>
              )}
              {addedItems.map((item) => {
                if (item.title !== "30cm" && item.title !== "15cm")
                  return (
                    <Flex key={item.id} gap={"5px"}>
                      <Text textStyle="body">+</Text>
                      <Text textStyle="body">
                        {`${handleSpecialCalories(item)}`}
                      </Text>
                      <Text textStyle="body">{item.title}</Text>
                    </Flex>
                  );
              })}
              {isDoubled(addedItems) && (
                <Flex>
                  <Text textStyle="body">) x 2 Size</Text>
                </Flex>
              )}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default AddedListAccordion;
