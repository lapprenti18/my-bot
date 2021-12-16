import { Items } from "./GenerateItems";

interface Data {
  ts: string;
  sale_id: string;
  price: number;
  assets: number;
  burned: number;
  list_count: number;
  list_min: number;
}

export interface OnlineItemPrice {
  data: Data;
  upd: Date;
}

export const setOnlinePrice = (
  items: Items,
  reqRslt: Record<string, OnlineItemPrice>
) => {
  let OnlinePrices: OnlineItemPrice[] = [];

  for (const [key, value] of Object.entries(reqRslt)) {
    OnlinePrices.push(value);
  }

  for (let i = 0; i <= 7; i++) {
    if (i < 3) {
      items.Wood[i + 2].SaleId = +OnlinePrices[i].data.sale_id;
      items.Wood[i + 2].OnlinePrice = +OnlinePrices[i].data.price;
    } else if (i >= 3 && i < 6) {
      items.Food[i - 3].SaleId = +OnlinePrices[i].data.sale_id;
      items.Food[i - 3].OnlinePrice = +OnlinePrices[i].data.price;
    } else if (i === 6) {
      items.Gold[0].SaleId = +OnlinePrices[i].data.sale_id;
      items.Gold[0].OnlinePrice = +OnlinePrices[i].data.price;
    } else {
      items.Wood[1].SaleId = +OnlinePrices[17].data.sale_id;
      items.Wood[1].OnlinePrice = +OnlinePrices[17].data.price;
    }
  }
};
