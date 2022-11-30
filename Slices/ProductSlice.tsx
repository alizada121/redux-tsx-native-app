import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type InitialState={
    id:number
}

const initialState:InitialState={
   id:10
}

console.log("girdi2")


const ProductSlice=createSlice({
    name: 'prod',
  initialState,
  reducers: {
    AddToCart: (state, action: PayloadAction<number>)=>{
        state.id += action.payload
        // state.id--
        console.log("ESAS BUDU")
       
    },

   
}
})

export default ProductSlice.reducer;
export const {AddToCart}=ProductSlice.actions;


