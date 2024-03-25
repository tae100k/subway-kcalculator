// 결국 많은 variation들은 category에 따라 결정된다.
// single/multi select
// 글자
// isSelected 등
// 그래서 infoType에는 category가 있는 게 맞았다.
// 일반화 : 도메일 로직에 종속될수록 코드가 구분할 수 있는 flag가 있어야 한다.

export enum SandwichCategory {
  Sandwich = "sandwich",
  Bread = "bread",
  Size = "size",
  Cheese = "cheese",
  ExtraCheese = "extracheese",
  Veggies = "veggies",
  Sauces = "sauces",
  Extras = "extras",
}

export const titleMapper: Record<SandwichCategory, string> = {
  [SandwichCategory.Sandwich]: "Sandwich",
  [SandwichCategory.Bread]: "Bread",
  [SandwichCategory.Size]: "Size",
  [SandwichCategory.Cheese]: "Cheese",
  [SandwichCategory.ExtraCheese]: "Extra Cheese",
  [SandwichCategory.Veggies]: "Veggies",
  [SandwichCategory.Sauces]: "Sauces",
  [SandwichCategory.Extras]: "Extras",
};

export const GridCategoryTitleList = Object.values(SandwichCategory);

export interface InfoType {
  title: string;
  calories: string;
  category: SandwichCategory | string;
}

export const SizeList: InfoType[] = [
  {
    title: "15cm",
    calories: "0",
    category: SandwichCategory.Size,
  },
  {
    title: "30cm",
    calories: "0",
    category: SandwichCategory.Size,
  },
];

export const LETTUCE_CALORIES = "202";
export const TOMATO_CALORIES = "7.7";
export const CUCUMBER_CALORIES = "1.5";
export const BELL_PEPPER_CALORIES = "1.4";
export const ONION_CALORIES = "2.8";
export const FLAT_BREAD_CALORIES = "2.8";
export const DEFAULT_CALORIES =
  LETTUCE_CALORIES +
  TOMATO_CALORIES +
  CUCUMBER_CALORIES +
  BELL_PEPPER_CALORIES +
  ONION_CALORIES;
