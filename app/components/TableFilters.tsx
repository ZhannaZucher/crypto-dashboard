"use client"
import Image from "next/image"
import star from "@/public/star-full.svg"
import { useAppDispatch } from "../store/selectors"
import { useEffect, useState } from "react"
import { setListDisplay, setStableState } from "../store/filterListSlice"

const TableFilters = () => {
  const [showStable, setShowStable] = useState(true)
  const [showFavList, setShowFavList] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setStableState(showStable))
  }, [showStable, dispatch])

  useEffect(() => {
    dispatch(setListDisplay(showFavList))
  }, [showFavList, dispatch])

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
        <div
          className={showFavList ? "no-list-btn" : "no-list-btn active"}
          onClick={() => setShowFavList(false)}
        >
          <p>No list</p>
        </div>
        <div
          className={showFavList ? "fav-list active" : "fav-list"}
          onClick={() => setShowFavList(true)}
        >
          <p>Favorites list</p>
          <Image src={star} alt="star" height={14} />
        </div>
      </div>
    </div>
  )
}

export default TableFilters
