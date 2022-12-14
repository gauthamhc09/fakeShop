import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    status: null,
    products: localStorage.getItem("productItems")
        ? JSON.parse(localStorage.getItem("productItems"))
        : [],
    categoryNameOnGlobal: "",
}
export const productsFetch = createAsyncThunk("products/productsFetch", async (categoryName) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
    return response.data
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        putCategoryNameOnGlobal: (state, action) => {
            state.categoryNameOnGlobal = action.payload
        }
    },
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.products = action.payload
            localStorage.setItem("productItems", JSON.stringify(state.products));
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected"
        }
    }
})

export const { putCategoryNameOnGlobal } = productsSlice.actions
export default productsSlice.reducer