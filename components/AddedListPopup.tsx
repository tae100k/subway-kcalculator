import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { infoType } from "../types/sandwich";
import AddedListAccordion from "./AddedListAccordion";

interface AddedListPopupProps {
  addedItems: infoType[];
}

const AddedListPopup: React.FC<AddedListPopupProps> = ({ addedItems }) => {
  return (
    <div>
      <Drawer
        placement="bottom"
        isOpen={true}
        onClose={() => {}}
        blockScrollOnMount={false}
      >
        <DrawerContent bg="Green.10" p={6}>
          <AddedListAccordion />
          <Text>Total</Text>
          <Flex flexDirection="row" justifyContent="space-between">
            <Flex flexDirection="row">
              <Text>000</Text>
              <Text>Kcal</Text>
            </Flex>
            <Text>Reset</Text>
          </Flex>
        </DrawerContent>
      </Drawer>
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
