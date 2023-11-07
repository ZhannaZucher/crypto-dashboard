"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  showStable: true,
  showList: false,
}

const filterSlice = createSlice({
  name: "filterList",
  initialState,
  reducers: {
    setStableState(state, action: PayloadAction<boolean>) {
      state.showStable = action.payload
    },
    setListDisplay(state, action: PayloadAction<boolean>) {
      state.showList = action.payload
    },
  },
})

export const { setStableState, setListDisplay } = filterSlice.actions
export default filterSlice.reducer
