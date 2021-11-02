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
            state.totalPrice = 0
        },
        incremenetQty: (state, { payload }) => {
            const array = [...state.list]
            const item = array.find(product => product.id === payload)
            item.qty = item.qty + 1
            state.list = array
        },
        decremenetQty: (state, { payload }) => {
            const array = [...state.list]
            const item = array.find(product => product.id === payload)
            item.qty = item.qty - 1
            state.list = array
        },



    }

})
export const { addToCart, removeFromCart, clearCart, incremenetQty, decremenetQty } = cartSlice.actions
export default cartSlice.reducer