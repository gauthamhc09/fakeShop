import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productItems: []
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts(state, action) {
            state.productItems = action.payload
        }
    }
})

export const { loadProducts } = productsSlice.actions;
export default productsSlice.reducer