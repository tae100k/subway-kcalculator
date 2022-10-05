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
import { isDoubled } from "../../../service/size.service";
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
                  <Text textStyle="body1">(</Text>
                </Flex>
              )}
              {addedItems.map((item) => {
                if (item.title !== "30cm")
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
              {isDoubled(addedItems) && (
                <Flex>
                  <Text textStyle="body1">) x 2 Size</Text>
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
