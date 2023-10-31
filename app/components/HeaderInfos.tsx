"use client"

import axios from "axios"
import Image from "next/image"
import logo from "@/public/logo.png"
import { useEffect, useState } from "react"
import { MarketData } from "@/types"
import PercentChange from "./PercentChange"
import TableFilters from "./TableFilters"

const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState<MarketData | undefined>(
    undefined
  )

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data))
  }, [])

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <Image src={logo} alt="logo" height={17} priority /> Watch Tower
          </h1>
        </li>
        <li>
          Cryptocurrencies :{" "}
          {headerData?.active_cryptocurrencies.toLocaleString()}
        </li>
        <li>Markets : {headerData?.markets.toLocaleString()}</li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Global Market Cap :
          <PercentChange
            percent={headerData?.market_cap_change_percentage_24h_usd}
          />
        </li>
        <li>
          BTC dominace :{" "}
          {headerData?.market_cap_percentage.btc.toFixed(1) + "%"}
        </li>
        <li>
          ETH dominace :{" "}
          {headerData?.market_cap_percentage.eth.toFixed(1) + "%"}
        </li>
      </ul>
      <TableFilters />
    </div>
  )
}

export default HeaderInfos
