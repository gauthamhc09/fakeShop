import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: localStorage.getItem("cartTotalQuantity")
    ? JSON.parse(localStorage.getItem("cartTotalQuantity"))
    : 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,

        };
        const cartQtyArray = state.cartItems.map((item) => (
          item.cartQuantity
        ))
        state.cartTotalQuantity = cartQtyArray.reduce((partialSum, a) => partialSum + a, 0)
        toast.info("product increased", {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        const cartQtyArray = state.cartItems.map((item) => (
          item.cartQuantity
        ))
        state.cartTotalQuantity = cartQtyArray.reduce((partialSum, a) => partialSum + a, 0)
        toast.success("added the product", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", JSON.stringify(state.cartTotalQuantity));
    },
    removeTodo(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      state.cartTotalQuantity = state.cartItems.length
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", JSON.stringify(state.cartTotalQuantity));
    },
  },
});

export const { addToCart, removeTodo } = cartSlice.actions;

export default cartSlice.reducer;
