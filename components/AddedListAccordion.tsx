import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
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
          <AccordionPanel pb={4}>
            {addedItems.map((item) => {
              return (
                <Box key={item.title}>
                  <Text>{item.title}</Text>
                  <Text>{item.calories}</Text>
                </Box>
              );
            })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AddedListAccordion;
