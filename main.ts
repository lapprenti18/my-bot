import { getPrices, Prices } from "./GetAllCurrentPrice";
import { generateItems, Items } from "./GenerateItems";

async function main()
{
  const items: Items = generateItems();
  const prices: Prices = await getPrices();

  console.log(items, prices)
};

main();
