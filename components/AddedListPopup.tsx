import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
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
      <Drawer placement="bottom" isOpen={true} onClose={() => {}}>
        <DrawerContent>
          <AddedListAccordion />
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
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
