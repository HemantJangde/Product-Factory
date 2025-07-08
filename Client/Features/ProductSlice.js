import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 200,
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product.push(action.payload);
    },

    removeProduct: (state, action) => {},
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
