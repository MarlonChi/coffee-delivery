import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const slice = createSlice({
  name: "contador",
  initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = slice.actions;
export default slice.reducer;
