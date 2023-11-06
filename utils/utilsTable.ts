export const priceFormater = (number: number) => {
  if (Math.round(number).toString().length < 4) {
    return new Intl.NumberFormat("us-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 5,
    }).format(number)
  } else {
    return number
  }
}

//removes 6 last zeros from million numbers of marketCap data
export const marketCapFormater = (number: number) => {
  let newNumber = String(number).split("").slice(0, -6)
  return Number(newNumber.join(""))
}
