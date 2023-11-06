"use client"

import emptyStar from "@/public/star-empty.svg"
import fullStar from "@/public/star-full.svg"
import { Coin } from "@/types"
import Image from "next/image"
import { useState, useEffect } from "react"

type StarIconProps = {
  coinId: Coin["id"]
}
const StarIcon = ({ coinId }: StarIconProps) => {
  const [like, setLike] = useState(false)

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",")
      if (favList.includes(coinId)) {
        setLike(true)
      } else {
        setLike(false)
      }
    }
  }, [coinId])

  const idChecker = (id: Coin["id"]) => {
    let favList = null
    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",")
    }
    if (favList) {
      //onClick if this id is already present in the local storage list, we remove it from the list and pass like value to false
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter(
          (coin: string) => coin !== id
        )
        setLike(false)
      } else {
        //if the list exists but the id isnot presented in the list we add it to the local storage list and pass like value to true
        window.localStorage.coinList = [...favList, coinId]
        setLike(true)
      }
    } else {
      //if the list doesn't exist yet in Local storage, it is created with this coinId
      window.localStorage.coinList = coinId
      setLike(true)
    }
  }

  return (
    <Image
      src={like ? fullStar : emptyStar}
      alt="star icon"
      onClick={() => idChecker(coinId)}
    />
  )
}

export default StarIcon
