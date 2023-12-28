import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import filterSliceReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterSliceReducer,
  },
  devTools: import.meta.env !== "production",
  middleware: (getDefaultMW) => getDefaultMW().concat(apiSlice.middleware),
});
