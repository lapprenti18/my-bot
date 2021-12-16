import { Prices } from "./GetAllCurrentPrice";
import { Item, Items } from "./GenerateItems";

const setPrices = (item: Item[], prices: Prices) => {
  return item.map((item: Item) => ({
    ...item,
    CraftingWaxPrice:
      item.Wood * prices.Wood +
      item.Gold * prices.Gold +
      item.Food * prices.Food,
  }))
}

export const setAllPrice = (items: Items, prices: Prices) => {
  items.Wood = setPrices(items.Wood, prices);
  items.Gold = setPrices(items.Gold, prices);
  items.Food = setPrices(items.Food, prices);

  return items;
};
