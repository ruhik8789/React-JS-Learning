import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state) => {
            state.value += 1;
        },
        removeItem: (state) => {
            state.value > 0 ? state.value -= 1 : null;
        },
        clearAllItems: (state) => {
            console.log(state);
            state.value = 0;
        }
    }
})

console.log(addToCart)
console.log(addToCart.actions);

export const { addItem, removeItem, clearAllItems } = addToCart.actions;
export default addToCart.reducer;