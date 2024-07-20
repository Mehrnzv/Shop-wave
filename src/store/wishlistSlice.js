import { createSlice } from "@reduxjs/toolkit";

const loadWishlistFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("wishlistItems");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load wishlist items from local storage", e);
    return [];
  }
};

const saveWishlistToLocalStorage = (wishlistItems) => {
  try {
    const serializedState = JSON.stringify(wishlistItems);
    localStorage.setItem("wishlistItems", serializedState);
  } catch (e) {
    console.warn("Could not save wishlist items to local storage", e);
  }
};

const initialState = {
  wishlistItems: loadWishlistFromLocalStorage(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      const newItem = action.payload;
      if (!state.wishlistItems.find((item) => item.id === newItem.id)) {
        state.wishlistItems.push(newItem);
        saveWishlistToLocalStorage(state.wishlistItems);
      }
    },
    removeItemFromWishlist: (state, action) => {
      const id = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== id
      );
      saveWishlistToLocalStorage(state.wishlistItems);
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;