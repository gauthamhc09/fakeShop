import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProductsApi = createApi({
  reducerPath: "getProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products/" }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getCategories: builder.query({
      query: () => "categories",
    }),
    getProductsOnCategory: builder.query({
      query: (categoryName) => `category/${categoryName}`
    })
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductsOnCategoryQuery } = getProductsApi;

// ?limit=5
// products/category/jewelery