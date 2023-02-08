import { configureStore } from "@reduxjs/toolkit";

import furnitureReducer from "./furniture/furniture-slice";

export const store = configureStore({
  reducer: {
    furniture: furnitureReducer,
  },
});
