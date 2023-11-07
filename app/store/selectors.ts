import type { RootState, AppDispatch } from "./store"
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux"

//typed useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//typed useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const selectCoinsData = (state: RootState) => state.coinsData.data
export const selectStableCoin = (state: RootState) =>
  state.stableCoin.showStable
