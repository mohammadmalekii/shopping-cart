import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from '../common/client';
export const fetchProduct = createAsyncThunk("product/fetchProduct", async() => {
    return await client.get('http://localhost:5000/data')

})

const initialState = {
    productList: [],
    status: 'idle'
}

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: {
        [fetchProduct.pending]: (state) => {
            state.status = "loading"
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.productList.push(...action.payload)
            state.status = "success"
        },
        [fetchProduct.rejected]: (state) => {
            state.status = "error"
            state.error = "API have some problem!"
        },

    }

})

export default productSlice.reducer