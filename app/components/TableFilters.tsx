import Image from "next/image"
import star from "@/public/star-full.svg"

const TableFilters = () => {
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" id="stableCoin" defaultChecked={true} />
          <label htmlFor="stableCoin">With stable coin</label>
        </div>
        <div className="no-list-btn">
          <p>No list</p>
        </div>
        <div className="fav-list">
          <p>Favorites list</p>
          <Image src={star} alt="star" height={14} />
        </div>
      </div>
    </div>
  )
}

export default TableFilters
