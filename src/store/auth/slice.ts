import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  data: any | null;
}

const initialState: AuthState = {
  data: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export default slice.reducer;
export const { setUser } = slice.actions;
