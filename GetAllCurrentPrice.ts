import axios from "axios"

export interface Prices {
    Wax: number;
    Wood: number;
    Gold: number;
    Food: number;
}

export interface Tick {
    id: number;
    low: number;
    high: number;
    open: number;
    close: number;
    vol: number;
    amount: number;
    version: number;
    count: number;
}

interface WaxCurrency {
    ch: string;
    status: string;
    ts: number;
    tick: Tick;
}

interface Symbol {
    name: string;
    precision: number;
}

interface BaseToken {
    symbol: Symbol;
    contract: string;
    str: string;
}

interface Symbol2 {
    name: string;
    precision: number;
}

interface QuoteToken {
    symbol: Symbol2;
    contract: string;
    str: string;
}

interface MiningCurrency {
    base_token: BaseToken;
    quote_token: QuoteToken;
    _id: string;
    chain: string;
    id: number;
    min_buy: string;
    min_sell: string;
    frozen: boolean;
    fee: number;
    last_price: number;
    volume24: number;
    volumeWeek: number;
    volumeMonth: number;
    change24: number;
    changeWeek: number;
    __v: number;
}



export const getPrices = async () => {
    const prices : Prices = {Wax: 0, Wood: 0, Gold: 0, Food: 0}
    const MiningCurrencies: MiningCurrency[] = (await axios.get("https://wax.alcor.exchange/api/markets")).data
    const waxCurrency: WaxCurrency = (await axios.get("https://api.huobi.pro/market/detail?symbol=waxpusdt")).data

    prices.Wax = waxCurrency.tick.close;
    prices.Gold = MiningCurrencies.find((MiningCurrency) => MiningCurrency.quote_token.symbol.name === "FWG").last_price;
    prices.Wood = MiningCurrencies.find((MiningCurrency) => MiningCurrency.quote_token.symbol.name === "FWW").last_price;
    prices.Food = MiningCurrencies.find((MiningCurrency) => MiningCurrency.quote_token.symbol.name === "FWF").last_price;

    return (prices)
}