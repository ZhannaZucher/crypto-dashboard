"use client"

import { useEffect } from "react"
import {
  selectCoinsData,
  useAppDispatch,
  useAppSelector,
} from "../store/selectors"
import { coinsDataFetch } from "../store/coinsDataSlice"
import { Treemap, Tooltip } from "recharts"
import { TreemapTooltip, colorPicker, excludeCoin } from "@/utils/utilsTreemap"
import { mockData } from "@/db"

const GlobalChart = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectCoinsData)
  //using mock data when API response fails because of too many requests
  const coinsData = data ? data : mockData

  useEffect(() => {
    dispatch(coinsDataFetch())
  }, [dispatch])

  let chartData = []
  if (coinsData && coinsData.length > 0) {
    for (let i = 0; i < 45; i++) {
      if (excludeCoin(coinsData[i])) {
        chartData.push({
          name:
            coinsData[i].symbol.toUpperCase() +
            " " +
            coinsData[i].market_cap_change_percentage_24h?.toFixed(1) +
            "%",
          size: coinsData[i].market_cap,
          fill: colorPicker(coinsData[i].price_change_percentage_24h),
        })
      }
    }
  }

  return (
    <div className="global-chart">
      <Treemap
        width={730}
        height={181}
        data={chartData}
        dataKey="size"
        stroke="rgb(51,51,51)"
        fill="black"
        aspectRatio={1}
      >
        <Tooltip content={<TreemapTooltip />} />
      </Treemap>
    </div>
  )
}

export default GlobalChart
