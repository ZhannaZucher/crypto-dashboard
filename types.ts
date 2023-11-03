type MarketPercentage = {
  ada: number
  bnb: number
  btc: number
  doge: number
  eth: number
  sol: number
  steth: number
  usdc: number
  usdt: number
  xrp: number
}

type TotalMarket = {
  aed: number
  ars: number
  aud: number
  bch: number
  bdt: number
  bhd: number
  bits: number
  bmd: number
  bnb: number
  brl: number
  btc: number
  cad: number
  chf: number
  clp: number
  cny: number
  czk: number
  dkk: number
  dot: number
  eos: number
  eth: number
  eur: number
  gbp: number
  hkd: number
  huf: number
  idr: number
  ils: number
  inr: number
  jpy: number
  krw: number
  kwd: number
  link: number
  lkr: number
  ltc: number
  mmk: number
  mxn: number
  myr: number
  ngn: number
  nok: number
  nzd: number
  php: number
  pkr: number
  pln: number
  rub: number
  sar: number
  sats: number
  sek: number
  sgd: number
  thb: number
  try: number
  twd: number
  uah: number
  usd: number
  vef: number
  vnd: number
  xag: number
  xau: number
  xdr: number
  xlm: number
  xrp: number
  yfi: number
  zar: number
}

export type MarketData = {
  active_cryptocurrencies: number
  ended_icos: number
  market_cap_change_percentage_24h_usd: number
  market_cap_percentage: MarketPercentage
  markets: number
  ongoing_icos: number
  total_market_cap: { [key: string]: number }
  total_volume: { [key: string]: number }
  upcoming_icos: number
  updated_at: Date | number
}
type ROI = {
  times: number
  currency: string
  percentage: number
}

export type Coin = {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number | null
  total_volume: number
  high_24h: number | null
  low_24h: number | null
  price_change_24h: number | null
  price_change_percentage_24h: number
  market_cap_change_24h: number | null
  market_cap_change_percentage_24h: number | null
  circulating_supply: number
  total_supply: number | null
  max_supply: number | null
  ath: number
  ath_change_percentage: number
  ath_date: Date | string
  atl: number
  atl_change_percentage: number
  atl_date: Date | string
  roi: null | ROI
  last_updated: Date | string
  price_change_percentage_14d_in_currency: number | null
  price_change_percentage_1h_in_currency: number | null
  price_change_percentage_1y_in_currency: number | null
  price_change_percentage_200d_in_currency: number | null
  price_change_percentage_24h_in_currency: number | null
  price_change_percentage_30d_in_currency: number | null
  price_change_percentage_7d_in_currency: number | null
}
