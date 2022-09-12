import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { infoType } from "../types/sandwich";
import AddedListAccordion from "./AddedListAccordion";

interface AddedListPopupProps {
  addedItems: infoType[];
}

const AddedListPopup: React.FC<AddedListPopupProps> = ({ addedItems }) => {
  return (
    <div>
      <Container
        bg="Green.10"
        p={6}
        position="fixed"
        w="100%"
        left={0}
        right={0}
        bottom={0}
      >
        <AddedListAccordion addedItems={addedItems} />
        <Text>Total</Text>
        <Flex flexDirection="row" justifyContent="space-between">
          <Flex flexDirection="row">
            <Text>000</Text>
            <Text>Kcal</Text>
          </Flex>
          <Text>Reset</Text>
        </Flex>
      </Container>

      {addedItems.map((item) => {
        return (
          <div key={item.title}>
            <Text>{item.title}</Text>
            <Text>{item.calories}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default AddedListPopup;
