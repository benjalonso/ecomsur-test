import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state, action) => {
      const productToAdd = action.payload;
      const existingProductIndex = state.value.findIndex(
        (product) => product.id === productToAdd.id
      );
      if (existingProductIndex !== -1) {
        const newState = [...state.value];
        newState[existingProductIndex].quantity += 1;
        state.value = newState;
      } else {
        state.value = [...state.value, { ...productToAdd, quantity: 1 }];
      }
    },
    decrement: (state, action) => {
      const productToRemove = action.payload;
      const existingProduct = state.value.find(
        (product) => product.id === productToRemove.id
      );
      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
      } else {
        state.value = state.value.filter(
          (product) => product.id !== productToRemove.id
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
