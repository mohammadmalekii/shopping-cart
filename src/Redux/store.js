import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
        filter: filterSlice,
    }
})