import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from '../Features/ProductSlice'

export const Store =configureStore({
    reducer: ProductReducer
})
