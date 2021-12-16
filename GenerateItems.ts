export interface Item {
  Name: string;
  Gold: number;
  Wood: number;
  Food: number;
  CraftingWaxPrice: number;
  OnlinePrice: number;
  SaleId: number;
}

export interface Items {
  Wood: Item[];
  Gold: Item[];
  Food: Item[];
}

const createItem = (Name: string, Gold: number, Wood: number, Food: number) => {
  return {
    Name,
    Gold,
    Wood,
    Food,
    CraftingWaxPrice: 0,
    OnlinePrice: 0,
    SaleId: 0,
  };
};

const WoodItems = [
  createItem("Ancient Stone Axe", 20, 110, 0),
  createItem("Stone Axe", 135, 800, 0),
  createItem("Axe", 400, 2400, 0),
  createItem("Saw", 1200, 7200, 0),
  createItem("Chainsaw", 3600, 21600, 0),
];

const GoldItems = [
  createItem("Mining Excavator", 4000, 24000, 0)
];

const FoodItems = [
  createItem("Fishing Rod", 200, 1200, 0),
  createItem("Fishing Net", 800, 4800, 0),
  createItem("Fishing Boat", 3200, 19200, 0),
];

export const generateItems = () => {
  const items: Items = { Wood: [], Gold: [], Food: [] };

  items.Food = FoodItems;
  items.Gold = GoldItems;
  items.Wood = WoodItems;

  return items;
};
