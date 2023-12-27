import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: import.meta.env !== "production",
  middleware: (getDefaultMW) => getDefaultMW().concat(apiSlice.middleware),
});
