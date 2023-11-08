import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/App";

export const store = configureStore({
  reducer: {
    App: AppSlice,
  },
});
