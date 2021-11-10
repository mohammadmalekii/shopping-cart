import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from '../common/client';
export const fetchProduct = createAsyncThunk("product/fetchProduct", async() => {
    return await client.get('http://localhost:5000/products')
})
export const fetchSelectProduct = createAsyncThunk("products/fetchSelectProduct", async(id) => {
    return await client.get(`http://localhost:5000/products/${id}`)
})

const initialState = {
    productList: [],
    status: 'idle',
    selectProduct: {},
    selectProductStatus: 'idle',
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        removeSelectProduct: (state) => {
            state.selectProduct = {}
        },
    },
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
        [fetchSelectProduct.pending]: (state) => {
            state.selectProductStatus = "loading"
        },
        [fetchSelectProduct.fulfilled]: (state, action) => {
            state.selectProductStatus = "success"
            state.selectProduct = action.payload
        }

    }

})

export const getAllProduct = ((state) => state.product.productList);
export const getProductStatus = ((state) => state.product.status);
export const getSelectedProduct = ((state) => state.product.selectProduct);
export const { removeSelectProduct, changeselectProductStatus } = productSlice.actions
export default productSlice.reducer