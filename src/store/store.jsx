import { configureStore } from "@reduxjs/toolkit";
import { getProductsApi } from "../services/api/api";
import cartSliceReducer from "../services/features/cartSlice";
import categorySliceReducer from "../services/features/categorySlice";
import categoriesReducer, { categoriesFetch } from "../services/features/asyncthunk/categorySlice"
import productsReducer from "../services/features/asyncthunk/productSlice"

// const store = configureStore({
//   reducer: {
//     [getProductsApi.reducerPath]: getProductsApi.reducer,
//     category: categorySliceReducer,
//     cart: cartSliceReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(getProductsApi.middleware),
// });

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartSliceReducer,
  }
})

store.dispatch(categoriesFetch())
export default store;
