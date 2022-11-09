import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    getPrizes: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetPrizesQuery } = productsSlice;
