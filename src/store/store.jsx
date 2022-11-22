import { configureStore } from "@reduxjs/toolkit";
import { getProductsApi } from "../services/api/api";
import cartSliceReducer from "../services/features/cartSlice";
import productsSliceReducer from "../services/features/productSlice";

const store = configureStore({
  reducer: {
    [getProductsApi.reducerPath]: getProductsApi.reducer,
    products: productsSliceReducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductsApi.middleware),
});

export default store;
