import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ArrowDown, ArrowUp } from "../../../public/assets/icons";
import { infoType } from "../../../types/sandwich";

interface AddedListAccordionProps {
  addedItems: infoType[];
}

const AddedListAccordion: React.FC<AddedListAccordionProps> = ({
  addedItems,
}) => {
  const handleSpecialCalories = (item: infoType) => {
    // 리팩토링 해야함.
    if (item.title === "Flat Bread") {
      return Number(item.calories.split(" ")[0]) / 2;
    }
    return Number(item.calories.split(" ")[0]);
  };
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <>
            <AccordionButton
              p={0}
              border="1px pink"
              color="white"
              display="flex"
              justifyContent="center"
              bg={isExpanded ? "Green.20" : "Green.10"}
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
              {addedItems.map((item) => {
                return (
                  <Flex key={item.id} gap={"5px"}>
                    <Text textStyle="body1">+</Text>
                    <Text textStyle="body1">
                      {`${handleSpecialCalories(item)}`}
                    </Text>
                    <Text textStyle="body1">{item.title}</Text>
                  </Flex>
                );
              })}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default AddedListAccordion;
