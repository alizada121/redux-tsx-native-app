import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'
import type { RootState,AppDispatch } from './store'
//Appdipatch da var
console.log("girdi1")

export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector
export const useAppDispatch=()=>useDispatch<AppDispatch>()