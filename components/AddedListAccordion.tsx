import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { infoType } from "../types/sandwich";

interface AddedListAccordionProps {
  addedItems: infoType[];
}

const AddedListAccordion: React.FC<AddedListAccordionProps> = ({
  addedItems,
}) => {
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem border="none">
          <AccordionButton display="flex" justifyContent="center">
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            pb={8}
            borderBottom="2px"
            borderBottomColor="Grayscale.10"
          >
            {addedItems.map((item) => {
              return (
                <Flex key={item.title} gap={"5px"}>
                  <Text textStyle="body1">+{item.calories} </Text>
                  <Text textStyle="body1">{item.title}</Text>
                </Flex>
              );
            })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AddedListAccordion;
