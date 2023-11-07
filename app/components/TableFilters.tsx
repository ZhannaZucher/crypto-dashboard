"use client"
import Image from "next/image"
import star from "@/public/star-full.svg"
import { useAppDispatch } from "../store/selectors"
import { useEffect, useState } from "react"
import { setStableState } from "../store/stableCoinSlice"

const TableFilters = () => {
  const [showStable, setShowStable] = useState(true)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setStableState(showStable))
  }, [showStable, dispatch])

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultChecked={true}
            onChange={() => setShowStable(!showStable)}
          />
          <label htmlFor="stableCoin">
            {showStable ? "With stable coin" : "Without stable coin"}
          </label>
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
