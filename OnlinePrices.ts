import axios from "axios";
import type { OnlineItemPrice } from "./setOnlinePrice";

export const getActualOnlinePrice = async () => {
  let reslt: Record<string, OnlineItemPrice> = null;

  while (true) {
    console.log("WAIT");
    try {
      return (await axios.get("https://fw2.f12key.xyz/z/history2.json", { timeout: 40000 })).data
    } catch {
      console.log("FAILED");
      continue
    } 
  }
};
