import { createSlice } from "@reduxjs/toolkit";

const handleSlice = createSlice({
    name: 'handle',
    initialState: [],
    reducers: {
        addProduct : (state, action) => {
            state.push(action.payload)
        },

        deleteProduct: (state, action) => {
            const products = state.filter(x => x.id != action.payload.id)
            return products
        }
    }   
})

export default handleSlice.reducer
export const {addProduct, deleteProduct} = handleSlice.actions 