"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  showStable: true,
}

const stableCoinSlice = createSlice({
  name: "stableCoin",
  initialState,
  reducers: {
    setStableState(state, action: PayloadAction<boolean>) {
      state.showStable = action.payload
    },
  },
})

export const { setStableState } = stableCoinSlice.actions
export default stableCoinSlice.reducer
