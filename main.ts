import { setAllPrice } from "./setPrices";
import { getActualOnlinePrice } from "./OnlinePrices";
import { getPrices, Prices } from "./GetAllCurrentPrice";
import { generateItems, Items } from "./GenerateItems";
import { OnlineItemPrice, setOnlinePrice } from "./setOnlinePrice";

async function main()
{
  const items: Items = generateItems();
  const prices: Prices = await getPrices();
  const onlinePrice: Record<string, OnlineItemPrice> = await getActualOnlinePrice();

  setAllPrice(items, prices);
  setOnlinePrice(items, onlinePrice);

  console.log(items, prices, onlinePrice)
};

main();
