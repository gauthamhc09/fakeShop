import { configureStore } from "@reduxjs/toolkit";
import { getProductsApi } from "../services/api/api";
import cartSliceReducer from "../services/features/cartSlice";
import categorySliceReducer from "../services/features/categorySlice";

const store = configureStore({
  reducer: {
    [getProductsApi.reducerPath]: getProductsApi.reducer,
    category: categorySliceReducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductsApi.middleware),
});

export default store;
