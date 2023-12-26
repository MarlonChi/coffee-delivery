import { createSlice } from "@reduxjs/toolkit";

import { CartSliceProps } from "./types";

const initialState: CartSliceProps = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // Se o item já estiver no carrinho, incrementa a quantidade
        existingItem.quantity += 1;
      } else {
        // Se o item não estiver no carrinho, adiciona ao carrinho com quantidade 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const { product } = action.payload;
      const itemToIncrement = state.items.find(
        (item) => item.id === product.id
      );

      if (itemToIncrement) {
        // Incrementa a quantidade do item no carrinho
        itemToIncrement.quantity += 1;
      } else {
        // Se o item não estiver no carrinho, adiciona ao carrinho com quantidade 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      const { product } = action.payload;
      const itemToDecrement = state.items.find(
        (item) => item.id === product.id
      );

      if (itemToDecrement) {
        // Decrementa a quantidade do item no carrinho
        itemToDecrement.quantity = Math.max(0, itemToDecrement.quantity - 1);

        // Remove o item do carrinho se a quantidade atingir zero
        if (itemToDecrement.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== product.id);
        }
      }
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      state.items = state.items.filter((item) => item.id !== product.id);
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
