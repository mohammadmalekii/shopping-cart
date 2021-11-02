import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
}

const cartSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.list.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.list = state.list.filter(product => product.id !== action.payload)

        },
        clearCart: (state) => {
            state.list = []
        },

    }

})
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer