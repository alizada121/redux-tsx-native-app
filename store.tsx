import { configureStore } from "@reduxjs/toolkit";
import { AddToCart } from "./Slices/ProductSlice";

// import {rootReducer} from "./rootReducer";
const store = configureStore({
    reducer:{
        prod:AddToCart
    }
  })
console.log("girdi3")

export default store;
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
