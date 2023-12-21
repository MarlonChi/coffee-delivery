import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      state[productId] = { quantity };
    },
    incrementQuantity: (state, action) => {
      const { productId } = action.payload;
      if (state[productId]) {
        state[productId].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { productId } = action.payload;
      if (state[productId] && state[productId].quantity > 0) {
        state[productId].quantity -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const { setQuantity, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
