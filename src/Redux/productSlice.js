import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from '../common/client';
export const fetchProduct = createAsyncThunk("product/fetchProduct", async() => {
    return await client.get('http://localhost:5000/products')
})
export const fetchSelectProduct = createAsyncThunk("products/fetchSelectProduct", async(id) => {
    return await client.get(`http://localhost:5000/products/${id}`)
})
export const fetchSearchProduct = createAsyncThunk("products/fetchSearchProduct", async(search) => {
    return await client.get(`http://localhost:5000/products?q=${search}`)
})

const initialState = {
    productList: [],
    status: 'idle',
    selectProduct: {},
    selectProductStatus: 'idle',
    search: ''
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        removeSelectProduct: (state) => {
            state.selectProduct = {}
        },
        updateSearch: (state, action) => {
            state.search = action.payload
        },

    },
    extraReducers: {
        [fetchProduct.pending]: (state) => {
            state.status = "loading";
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.productList = [];
            state.productList.push(...action.payload);
            state.status = "success";
        },
        [fetchProduct.rejected]: (state) => {
            state.status = "error";
            state.error = "API have some problem!";
        },
        [fetchSelectProduct.pending]: (state) => {
            state.selectProductStatus = "loading";
        },
        [fetchSelectProduct.fulfilled]: (state, action) => {
            state.selectProductStatus = "success";
            state.selectProduct = action.payload;
        },
        [fetchSearchProduct.pending]: (state) => {
            state.status = "loading";
        },
        [fetchSearchProduct.fulfilled]: (state, action) => {
            state.productList = [];
            state.productList.push(...action.payload);
            state.status = "success";
        }

    }

})

export const getAllProduct = ((state) => state.product.productList);
export const getProductStatus = ((state) => state.product.status);
export const getSelectedProduct = ((state) => state.product.selectProduct);
export const getSearch = ((state) => state.product.search);
export const { removeSelectProduct, changeselectProductStatus, updateSearch } = productSlice.actions
export default productSlice.reducer