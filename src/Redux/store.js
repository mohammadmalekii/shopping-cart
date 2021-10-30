import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import basketSlice from "./basketSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        basket: basketSlice,
    }
})