"use client"

import { useEffect, useState } from "react"

type PercentChangeProps = {
  percent: number | undefined
}

//checks whether global market cap is positive or negative and render value in related colour
const PercentChange = ({ percent }: PercentChangeProps) => {
  const [color, setColor] = useState<string>()

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor("#02AC94")
      } else {
        setColor("#FF6F56")
      }
    } else {
      setColor("#ffffff")
    }
  }, [percent])
  return (
    <p className="percent-change-container" style={{ color }}>
      {/* si on a le % on l'arrondit à un chiffre après la vigule */}
      {percent ? percent.toFixed(1) + "%" : "-"}
    </p>
  )
}

export default PercentChange
