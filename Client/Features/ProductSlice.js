import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [
   
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product.push(action.payload);
    },

    removeProduct: (state, action) => {

state.product = state.product.filter((item) => item.id !== action.payload);
      
    },
  },
})

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
