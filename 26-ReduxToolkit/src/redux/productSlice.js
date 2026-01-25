import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
});

const initialState = {
    items: [],
    status: undefined,
    error: null
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                console.log('🔄 Loading products...');
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                console.log('✅ Products loaded:', action.payload);
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('❌ Error:', action.error.message);
            })
    }
});

export default productsSlice.reducer;