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

//handle fixed table header
export const handleTableHeader = () => {
  // when more than 145px are scrolled on Y axis the position of the table-header becomes fixed
  if (window.scrollY > 145) {
    document.querySelector(".table-header")?.classList.add("active")
  } else {
    document.querySelector(".table-header")?.classList.remove("active")
  }
}

//checks if the coin is stable or not
export const isUnstableCoin = (coin: string) => {
  let stables = [
    "usdt",
    "usdc",
    "busd",
    "dai",
    "ust",
    "mim",
    "tusd",
    "usdp",
    "usdn",
    "fei",
    "tribe",
    "gusd",
    "frax",
    "lusd",
    "husd",
    "ousd",
    "xsgd",
    "usdx",
    "eurs",
    "cusdc",
    "cdai",
    "usdd",
    "ibeur",
    "eurt",
    "flexusd",
    "alusd",
    "susd",
  ]
  if (stables.includes(coin)) {
    return false
  } else {
    return true
  }
}
