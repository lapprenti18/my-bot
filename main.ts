import { generateItems, Items } from "./GenerateItems";

async function main()
{
  const items: Items = generateItems();
  
  console.log(items)
};

main();
