import { Button } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import cheerio from "cheerio";

const HomeScreen = () => {
  // target website
  const URL = "https://www.subway.co.kr/menuList/sandwich";
  const handleClick = () => {
    axios(URL)
      .then((res) => {
        const htmlData = res.data;

        // grab the data with cheerio to use whichever part we want to use
        // the reason using $ sign is because when ever I use the data I'll use dollar sign with bracket ${''}
        const $ = cheerio.load(htmlData);
        const sandwichInfo = [];
        // get the element with the classname teaser
        // and get htmlData of .teaser element
        //
        $(".pd_list_wrapper li", htmlData).each((index, element) => {
          const sandwichTitle = $(element).children(".tit").text(); // using cheerio here. children will be headline class
          const sandwichCalories = $(element).children(".cal").text();

          if (sandwichCalories !== "") {
            sandwichInfo.push({
              sandwichTitle,
              sandwichCalories,
            });
          }
        });
        console.log(sandwichInfo);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Button onClick={handleClick}>버튼</Button>
    </div>
  );
};

console.log("End of Main Program");

export default HomeScreen;
