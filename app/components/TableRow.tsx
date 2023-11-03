import { Coin } from "@/types"
import Image from "next/image"
import icon from "@/public/chart-icon.svg"
import infoIcon from "@/public/info-icon.svg"
import Link from "next/link"

type TableRowProps = {
  coin: Coin
  index: number
}

const TableRow = ({ coin, index }: TableRowProps) => {
  return (
    <div className="table-line">
      <div className="infos-container">
        <span>*</span>
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
    </div>
  )
}

export default TableRow
