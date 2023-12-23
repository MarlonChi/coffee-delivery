import { ThunkAction } from "redux-thunk";
import { RootState } from "../root-reducer";
import { Action } from "@reduxjs/toolkit";

import { setAddressData } from "./slice";

export const fetchAddressByCep =
  (cep: string): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: "GET",
        mode: "cors",
      });

      if (response.ok) {
        const data = await response.json();

        dispatch(setAddressData(data));
      } else {
        console.error("Erro ao obter dados do CEP:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao obter dados do CEP:", error);
    }
  };
