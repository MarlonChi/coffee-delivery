import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item: any) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
  },
});

export default cartSlice.reducer;
export const { addProductToCart } = cartSlice.actions;
