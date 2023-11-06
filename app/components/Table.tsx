// @ts-nocheck
"use client"

import { selectCoinsData, useAppSelector } from "../store/selectors"
import { useEffect, useState } from "react"
import TableRow from "./TableRow"
import { mockData } from "@/db"
import ScrollToTop from "./ScrollToTop"
import { handleTableHeader } from "@/utils/utilsTable"

const Table = () => {
  const [rangeNumber, setRangeNumber] = useState("100")
  const [orderBy, setOrderBy] = useState("")
  const data = useAppSelector(selectCoinsData)
  //using mock data when API response fails because of too many requests
  const coinsData = data ? data : mockData

  const tableHeader = [
    "Price",
    "MarketCap",
    "Volume",
    "1H",
    "1D",
    "1W",
    "1M",
    "6M",
    "1Y",
    "ATH",
  ]

  useEffect(() => {
    window.addEventListener("scroll", handleTableHeader)
    return () => window.removeEventListener("scroll", handleTableHeader)
  }, [])

  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            {"Top" + " "}
            <input
              type="text"
              value={rangeNumber}
              onChange={(e) => setRangeNumber(e.target.value)}
            />
          </span>
          <input
            type="range"
            min={1}
            max={250}
            value={rangeNumber}
            onChange={(e) => setRangeNumber(e.target.value)}
          />
          {/* display: none */}
          <ScrollToTop />
        </div>
        {tableHeader.map((el) => (
          <li key={el}>
            <input
              type="radio"
              name="header-el"
              id={el}
              defaultChecked={
                el === orderBy || el === orderBy + "reverse" ? true : false
              }
              onClick={() => {
                if (orderBy === el) {
                  setOrderBy(el + "reverse")
                } else {
                  setOrderBy(el)
                }
              }}
            />
            <label htmlFor={el}>{el}</label>
          </li>
        ))}
      </ul>

      {coinsData &&
        coinsData
          .slice(0, parseInt(rangeNumber))
          .sort((a, b) => {
            switch (orderBy) {
              case "Price":
                return b.current_price - a.current_price

              case "Pricereverse":
                return a.current_price - b.current_price

              case "MarketCap":
                return b.market_cap - a.market_cap

              case "MarketCapreverse":
                return a.market_cap - b.market_cap

              case "Volume":
                return b.total_volume - a.total_volume

              case "Volumereverse":
                return a.total_volume - b.total_volume

              case "1H":
                return (
                  b.price_change_percentage_1h_in_currency -
                  a.price_change_percentage_1h_in_currency
                )

              case "1Hreverse":
                return (
                  a.price_change_percentage_1h_in_currency -
                  b.price_change_percentage_1h_in_currency
                )

              case "1D":
                return (
                  b.market_cap_change_percentage_24h -
                  a.market_cap_change_percentage_24h
                )

              case "1Dreverse":
                return (
                  a.market_cap_change_percentage_24h -
                  b.market_cap_change_percentage_24h
                )

              case "1W":
                return (
                  b.price_change_percentage_7d_in_currency -
                  a.price_change_percentage_7d_in_currency
                )

              case "1Wreverse":
                return (
                  a.price_change_percentage_7d_in_currency -
                  b.price_change_percentage_7d_in_currency
                )

              case "1M":
                return (
                  b.price_change_percentage_30d_in_currency -
                  a.price_change_percentage_30d_in_currency
                )

              case "1Mreverse":
                return (
                  a.price_change_percentage_30d_in_currency -
                  b.price_change_percentage_30d_in_currency
                )

              case "6M":
                return (
                  b.price_change_percentage_200d_in_currency -
                  a.price_change_percentage_200d_in_currency
                )

              case "6Mreverse":
                return (
                  a.price_change_percentage_200d_in_currency -
                  b.price_change_percentage_200d_in_currency
                )

              case "1Y":
                return (
                  b.price_change_percentage_1y_in_currency -
                  a.price_change_percentage_1y_in_currency
                )

              case "1Yreverse":
                return (
                  a.price_change_percentage_1y_in_currency -
                  b.price_change_percentage_1y_in_currency
                )

              case "ATH":
                return b.ath_change_percentage - a.ath_change_percentage

              case "ATHreverse":
                return a.ath_change_percentage - b.ath_change_percentage
            }
          })
          .map((coin, index) => (
            <TableRow key={coin.id} coin={coin} index={index} />
          ))}
    </div>
  )
}

export default Table
