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
        increaseOrDecreaseQty: (state, { payload: { id, qtyType } }) => {
            const array = [...state.list]
            const item = array.find(product => product.id === id)
            if (qtyType === 'increase') {
                item.qty = item.qty + 1
            } else if (qtyType === 'decrease') {
                item.qty = item.qty - 1
            }
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

export const getTotalPrice = ((state) => state.cart.totalPrice);
export const getCartList = ((state) => state.cart.list);
export const { addToCart, removeFromCart, clearCart, increaseOrDecreaseQty, calcTotalPrice } = cartSlice.actions
export default cartSlice.reducer