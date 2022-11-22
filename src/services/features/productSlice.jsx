import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: []
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload
        }
    }
})

export const { setCategory } = productsSlice.actions;
export default productsSlice.reducer