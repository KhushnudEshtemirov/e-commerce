import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  furnitureItems: [],
};

const furnitureSlice = createSlice({
  name: "furniture",
  initialState,
  reducers: {
    addFurniture: (state, { payload }) => {
      state.furnitureItems = payload;
    },
    removeFurniture: (state, { payload }) => {
      state.furnitureItems = state.furnitureItems.filter(
        (el) => el.id !== payload
      );
    },
  },
});

export const { addFurniture, removeFurniture } = furnitureSlice.actions;
export default furnitureSlice.reducer;
