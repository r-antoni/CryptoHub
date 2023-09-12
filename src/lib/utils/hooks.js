import { useState, useEffect, useCallback } from "react";

import { getSymbols, findByValue } from "../utils/index.js";
import { CRYPTOCURRENCIES } from "../../configs";

const useTicker = () => {
 const [crypto, setCrypto] = useState(CRYPTOCURRENCIES)
 const fetchData = useCallback(async ()=> {
  try {

    const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(getSymbols())}`);

    const cryptoData = await response.json();
    
    setCrypto(
      crypto.map((item)=>{
        const {lastPrice, lowPrice, highPrice} = findByValue(cryptoData, item.symbol) || {};

        return{
          ...item, 
          highPrice,
          lowPrice,
          price: lastPrice,
          prevPrice: item?.price || 0
        }
      })
    )
  } catch (error) {
    console.log(error)
  }
 },[crypto]);

 useEffect(()=>{
  const interval = setInterval(fetchData, 6000);
  return ()=> clearInterval(interval)
 })

 return crypto;
};

export { useTicker };