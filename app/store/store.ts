"use client"

import { configureStore } from "@reduxjs/toolkit"
import coinsDataReducer from "./coinsDataSlice"
import stablecoinSlice from "./stableCoinSlice"

export const store = configureStore({
  reducer: {
    coinsData: coinsDataReducer,
    stableCoin: stablecoinSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
