"use client"

import { configureStore } from "@reduxjs/toolkit"
import coinsDataReducer from "./coinsDataSlice"

export const store = configureStore({
  reducer: {
    coinsData: coinsDataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
