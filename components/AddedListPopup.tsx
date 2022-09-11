import { Text } from "@chakra-ui/react";
import React from "react";
import { infoType } from "../types/sandwich";

interface AddedListPopupProps {
  addedItems: infoType[];
}

const AddedListPopup: React.FC<AddedListPopupProps> = ({ addedItems }) => {
  return (
    <div>
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
