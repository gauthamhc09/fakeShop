import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: null,
    items: []
}

export const categoriesFetch = createAsyncThunk("category/categoryFetch", async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories')
    return response?.data
})

export const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: {
        [categoriesFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [categoriesFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload
        },
        [categoriesFetch.rejected]: (state, action) => {
            state.status = "rejected";
        }
    }
})

export default categorySlice.reducer