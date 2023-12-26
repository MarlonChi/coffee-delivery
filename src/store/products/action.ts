import { AppDispatch } from "../configureStore";
import { fetchError, fetchStarted, fetchSuccess } from "./slice";

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(`http://localhost:3000/products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(fetchSuccess(data));
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(fetchError(error.message));
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
};
