import React from "react";

import Loader from "./Loader";
import Status from "./Status";
import { formatPrice } from "../lib/utils/index";
import {FiExternalLink} from "react-icons/fi"

interface Props {
  crypto: {
    id: string;
    name: string;
    symbol: string;
    iconCode: number;
    price: number;
    highPrice: number;
    lowPrice: number;
    prevPrice: number;
    explorer: string;
  };
}

function Crypto({ crypto }: Props) {
  
  const priceColor = crypto.prevPrice ? crypto.price > crypto.prevPrice ? "text-green-500" : "text-red-500" : "text-gray-900"
  
  return (
    <div className=" max-w p-6 bg-white border border-gray-100 rounded-lg shadow-lg h-full items-center">
      <img src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${crypto.iconCode}.png`} alt="" className="w-10 h-10 mb-2 rounded-full"/>
      <h3 className="text-2xl mb-1 font-semibold text-gray-900">
        {crypto.name}
      </h3>

      {crypto.price ? (
        <>
        <span className={priceColor}>{formatPrice(crypto.price)}</span>
        <div>
          <Status label="24h High" value={formatPrice(crypto.highPrice)}></Status>
          <Status label="24h Low" value={formatPrice(crypto.lowPrice)}></Status>
          <Status label="Market" value={crypto.symbol}></Status>
        </div>
        </>
      ):(
        <Loader />
      )}
      <a href={crypto.explorer}>
        Explorer
        <FiExternalLink />
      </a>
    </div>
  );
}

export default Crypto;
