import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./fratures/cart/cartSlice";
import modalReducer from "./fratures/modal/modalSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        modal: modalReducer,
    }
})