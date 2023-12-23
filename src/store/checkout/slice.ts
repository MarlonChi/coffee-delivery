import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
      const { logradouro, localidade, bairro, uf, ...rest } = action.payload;
      return {
        ...state,
        ...rest,
        address: logradouro,
        city: localidade,
        district: bairro,
        state: uf,
      };
    },
  },
});

export default checkoutSlice.reducer;
export const { setAddressData } = checkoutSlice.actions;
