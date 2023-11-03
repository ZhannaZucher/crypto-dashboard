"use client"

import { selectCoinsData, useAppSelector } from "../store/selectors"
import { useState } from "react"
import TableRow from "./TableRow"
import { mockData } from "@/db"

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
    "1M",
    "6M",
    "1Y",
    "ATH",
  ]

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
          .map((coin, index) => (
            <TableRow key={coin.id} coin={coin} index={index} />
          ))}
    </div>
  )
}

export default Table
