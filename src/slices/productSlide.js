import { createSlice } from '@reduxjs/toolkit'

//Variables for the slice
const initialState = {
    listProducts: [],

}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setListProducts: (state, action) => {
            state.listProducts.push(action.payload)
        }

    },
})

//Exporting all the modules
export const { setListProducts } = productSlice.actions

export default productSlice.reducer