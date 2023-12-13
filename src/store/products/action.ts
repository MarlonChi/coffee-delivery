import { fetchError, fetchStarted, fetchSuccess } from "./slice";

export const fetchProducts = () => async (dispatch: any) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(`http://localhost:3000/products`, {
      cache: "no-store",
    });
    const data = await response.json();
    dispatch(fetchSuccess(data));
  } catch (error: any) {
    dispatch(fetchError(error.message));
  }
};
