import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // value: 0
    items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
}

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // state.value += 1;
            // console.log('state', state);
            // console.log('action', action);
            state.items.push(action.payload);
            // console.log('items', state.items);
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);

            if(index !== -1) {
                state.items.splice(index, 1);
                localStorage.setItem('items', JSON.stringify(state.items));
            } else {
                console.log('Item not found');
            }
        },
        clearAllItems: (state) => {
            state.value = 0;
        }
    }
})

// console.log(addToCart)
// console.log(addToCart.actions);

export const { addItem, removeItem, clearAllItems } = addToCart.actions;
export default addToCart.reducer;