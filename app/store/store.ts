"use client"

import { configureStore } from "@reduxjs/toolkit"
import coinsDataReducer from "./coinsDataSlice"
import filterListReducer from "./filterListSlice"

export const store = configureStore({
  reducer: {
    coinsData: coinsDataReducer,
    filterList: filterListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
