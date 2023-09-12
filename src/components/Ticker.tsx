import React from "react";

import Crypto from "./Crypto";
import { useTicker } from "../lib/utils/hooks";

export default function Ticker() {
  const crypto = useTicker();

  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
      {crypto?.map((token)=>(
        <Crypto key={token.id} crypto={token}/>
      ))}
    </div>
  );
}