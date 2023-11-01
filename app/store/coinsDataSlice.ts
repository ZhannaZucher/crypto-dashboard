"use client"

import { Coin } from "@/types"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

type CoinsData = Array<Coin>

type CoinsDataState = {
  data: CoinsData | null
  loading: boolean
  error: null | string
}

const initialState: CoinsDataState = {
  data: null,
  loading: false,
  error: null,
}

export const coinsDataFetch = createAsyncThunk<
  any,
  undefined,
  { state: { coinsData: CoinsDataState } }
>("coinsData/coinsDataFetch", async (_, { getState }) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
    )
    return response.data
  } catch (error) {
    throw new Error("Unable to fetch coins data")
  }
})

const coinsDataSlice = createSlice({
  name: "coinsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(coinsDataFetch.pending, (state) => {
        state.loading = true
      })
      .addCase(coinsDataFetch.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(coinsDataFetch.rejected, (state) => {
        state.error = "rejected"
        state.loading = false
      })
  },
})

export default coinsDataSlice.reducer
