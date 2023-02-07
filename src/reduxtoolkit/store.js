import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import furnitureReducer from "./furniture/furniture-slice";

export const store = configureStore({
  reducer: {
    furniture: furnitureReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
