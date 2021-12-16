import { setAllPrice } from "./setPrices";
import { getActualOnlinePrice } from "./OnlinePrices";
import { getPrices, Prices } from "./GetAllCurrentPrice";
import { generateItems, Items } from "./GenerateItems";
import { OnlineItemPrice, setOnlinePrice } from "./setOnlinePrice";
import * as fs from "fs";

async function main()
{
  const items: Items = generateItems();
  const prices: Prices = await getPrices();
  const onlinePrice: Record<string, OnlineItemPrice> = await getActualOnlinePrice();

  setAllPrice(items, prices);
  setOnlinePrice(items, onlinePrice);

  fs.writeFileSync('Item.json', JSON.stringify(items, null, 2));
};

main();
