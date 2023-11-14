
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './src/slice/cartSlice'
import  productSlice  from './src/slice/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice
  },
})