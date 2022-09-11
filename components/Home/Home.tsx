import { Box } from "@chakra-ui/react";
import React from "react";
import { GridCategoryList } from "../../types/sandwich";
import InfoGridList from "./InfoGridList";

const HomeScreen = () => {
  return (
    <Box p={4} pb={"158px"}>
      {GridCategoryList.map((category) => {
        return <InfoGridList key={category} title={category} />;
      })}
    </Box>
  );
};

export default HomeScreen;
