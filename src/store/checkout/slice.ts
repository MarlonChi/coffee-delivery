import { createSlice } from "@reduxjs/toolkit";

import { CheckoutSliceProps } from "./types";

const initialState: CheckoutSliceProps = {
  cep: "",
  address: "",
  number: "",
  complement: "",
  district: "",
  city: "",
  state: "",
  paymentMethod: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setAddressData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default checkoutSlice.reducer;
export const { setAddressData } = checkoutSlice.actions;
