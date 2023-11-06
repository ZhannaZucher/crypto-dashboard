"use client"

import Image from "next/image"
import arrow from "@/public/arrow-icon.svg"

const ScrollToTop = () => {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 0)}>
      <Image src={arrow} alt="arrow icon" />
    </div>
  )
}

export default ScrollToTop
