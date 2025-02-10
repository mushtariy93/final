import { IProduct } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveStorage } from "../../utils";

export interface ICartState {
  value: IProduct[];
}

const cartStore = localStorage.getItem("cart");
const initialState: ICartState = {
  value: cartStore ? JSON.parse(cartStore) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Toggle item in the cart (add/remove)
    toggleCart: (state, action: PayloadAction<IProduct>) => {
      const isCart = state.value.some((item) => item.id === action.payload.id);
      if (!isCart) {
        state.value.push(action.payload);
      } else {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
      }
      saveStorage("cart", state.value); // Update localStorage
    },

    // Remove specific item from the cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      saveStorage("cart", state.value); // Update localStorage after removal
    },

    // Clear the cart (remove all items)
    clearcart: (state) => {
      state.value = [];
      localStorage.removeItem("cart"); // Remove cart from localStorage
    },
  },
});

export const { toggleCart, removeFromCart, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
