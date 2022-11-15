import { configureStore } from "@reduxjs/toolkit";
import { getProductsApi } from "../services/api/api";
import cartSliceReducer from "../services/features/cartSlice";

const store = configureStore({
  reducer: {
    [getProductsApi.reducerPath]: getProductsApi.reducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductsApi.middleware),
});

export default store;
