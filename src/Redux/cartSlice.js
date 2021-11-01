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

    }

})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer