"use client"

import { Coin, CoinPrices } from "@/types"
import axios from "axios"
import { useState, useEffect } from "react"
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

type CoinChartProps = {
  coinId: Coin["id"]
  coinName: Coin["name"]
}

const CoinChart = ({ coinId, coinName }: CoinChartProps) => {
  const [duration, setDuration] = useState(30)
  const [coinData, setCoinData] = useState<CoinPrices[]>([])

  const headerData = [
    [1, "1 day"],
    [3, "3 days"],
    [7, "7 days"],
    [30, "1 month"],
    [91, "3 months"],
    [181, "6 months"],
    [365, "1 year"],
    [3000, "Max"],
  ]

  useEffect(() => {
    let dataArray: Array<CoinPrices> = []
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${
          duration > 32 ? "&interval=daily" : ""
        }`
      )
      .then((res) => {
        for (let i = 0; i < res.data.prices.length; i++) {
          let price = res.data.prices[i][1]
          dataArray.push({
            date: new Date(res.data.prices[i][0]).toLocaleDateString(),
            price: price < "50" ? price : parseInt(price),
          })
        }
        setCoinData(dataArray)
      })
  }, [coinId, duration])

  return (
    <div className="coin-chart">
      <p>{coinName}</p>
      <div className="btn-container">
        {headerData.map((el) => {
          return (
            <div
              key={el[0]}
              data-htmlfor={"btn" + el[0]}
              onClick={() => setDuration(Number(el[0]))}
              className={el[0] === duration ? "active-btn" : ""}
            >
              {el[1]}
            </div>
          )
        })}
      </div>
      <AreaChart
        width={680}
        height={250}
        data={coinData}
        margin={{ top: 10, right: 0, left: 100, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="7%" stopColor="#00b7b3" stopOpacity={0.8} />
            <stop offset="93%" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#00b7b3"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  )
}

export default CoinChart
