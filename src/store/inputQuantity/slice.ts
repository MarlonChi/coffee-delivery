import { createSlice } from "@reduxjs/toolkit";

interface InputQuantityState {
  value: number;
}

const initialState: InputQuantityState = {
  value: 0,
};

const slice = createSlice({
  name: "inputQuantity",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

export const { increment, decrement } = slice.actions;
export default slice.reducer;
