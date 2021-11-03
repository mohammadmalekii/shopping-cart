import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    totalPrice: 0,
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
            console.log(array);
            item.qty = item.qty + 1
            state.list = array
        },
        decremenetQty: (state, { payload }) => {
            const array = [...state.list]
            const item = array.find(product => product.id === payload)
            item.qty = item.qty - 1
            state.list = array
        },

        calcTotalPrice: (state) => {
            const array = [...state.list]
            const price = array.reduce((acc, curr) => {
                return (acc += curr.price * curr.qty);
            }, 0)
            state.totalPrice = price
        },




    }

})
export const { addToCart, removeFromCart, clearCart, incremenetQty, decremenetQty, calcTotalPrice } = cartSlice.actions
export default cartSlice.reducer