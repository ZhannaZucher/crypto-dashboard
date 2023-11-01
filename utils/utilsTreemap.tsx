import { Coin } from "@/types"
import { TooltipProps } from "recharts"
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent"

//custom tooltip
export const TreemapTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  return active && payload && payload.length ? (
    <div className="custom-tooltip">
      <p className="label">{payload[0].payload.name}</p>
    </div>
  ) : null
}

//render fill colour based on coin price change 24h percentage
export const colorPicker = (number: number) => {
  if (number >= 20) {
    return "#00b7b3"
  } else if (number >= 5) {
    return "rgb(0, 253, 148)"
  } else if (number >= 0) {
    return "rgb(2, 172, 81)"
  } else if (number >= -5) {
    return "rgb(255, 111, 86)"
  } else if (number >= -20) {
    return "rgb(251, 69, 63)"
  } else {
    return "rgb(10, 10, 10)"
  }
}

//exlude stable coins from chart data
export const excludeCoin = (coin: Coin) => {
  if (
    coin.symbol === "usdt" ||
    coin.symbol === "usdc" ||
    coin.symbol === "busd" ||
    coin.symbol === "dai" ||
    coin.symbol === "ust" ||
    coin.symbol === "mim"
  ) {
    return false
  } else {
    return true
  }
}
