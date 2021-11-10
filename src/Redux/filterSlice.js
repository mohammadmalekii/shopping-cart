import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filterType: "all"
    },
    reducers: {
        changeFilter: (state, action) => {
            state.filterType = action.payload
        }
    }

})

export const getFilterStatus = ((state) => state.filter.filterType)
export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer