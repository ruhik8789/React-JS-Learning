import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice'
import productsReducer from './productSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
})

console.log(store);
console.log(store.getState());

export default store;