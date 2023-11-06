import { Coin } from "@/types"
import Image from "next/image"
import icon from "@/public/chart-icon.svg"
import infoIcon from "@/public/info-icon.svg"
import Link from "next/link"
import { marketCapFormater, priceFormater } from "@/utils/utilsTable"
import PercentChange from "./PercentChange"
import StarIcon from "./StarIcon"

type TableRowProps = {
  coin: Coin
  index: number
}

const TableRow = ({ coin, index }: TableRowProps) => {
  return (
    <div className="table-line">
      <div className="infos-container">
        <StarIcon coinId={coin.id} />
        <p>{index + 1}</p>
        <div className="img">
          <Image src={coin.image} height={15} width={15} alt="logo" />
        </div>

        <div className="infos">
          <div className="chart-img">
            <Image src={icon} alt="chart-icon" priority />
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <Link
            target="_blank"
            href={
              "https://www.coingecko.com/fr/pi%C3%A8ces/" +
              coin.name.toLowerCase().replaceAll(" ", "-")
            }
          >
            <Image
              src={infoIcon}
              alt="info icon"
              height={14}
              width={14}
              priority
            />
          </Link>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap">
        {marketCapFormater(coin.market_cap).toLocaleString()} M$
      </p>
      <p className="volume">{coin.total_volume.toLocaleString()} $</p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_24h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      {/* if the highest price ever reached by a cryptocurrency is reached, renders
      ATH notification otherwise renders ATH coins data */}
      {coin.ath_change_percentage > -3 ? (
        <p>ATH ! </p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  )
}

export default TableRow
