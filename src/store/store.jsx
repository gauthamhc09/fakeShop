import { configureStore } from "@reduxjs/toolkit";
import { getProductsApi } from "../services/api/api";

const store = configureStore({
  reducer: {
    [getProductsApi.reducerPath]: getProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductsApi.middleware),
});

export default store;
