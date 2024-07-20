import { createSlice } from "@reduxjs/toolkit";

// Utility functions to interact with local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const initialState = loadState() || {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  shippingCost: 0,
  shippingType: 'free',
};

const recalculateTotals = (state) => {
  state.totalAmount = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  state.totalQuantity = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      //state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      recalculateTotals(state)
      saveState(state);
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      {/* state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ); */}
      recalculateTotals(state)
      saveState(state);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
      }
      recalculateTotals(state)
      saveState(state);
    },
    setShipping(state, action) {
      state.shippingCost = action.payload.cost;
      state.shippingType = action.payload.type;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
