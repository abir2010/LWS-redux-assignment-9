import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectList: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addToProjectList(state, action) {
      const index = state.projectList?.findIndex((p) => p === action.payload);

      if (index === -1) {
        state.projectList.push(action.payload);
      }
    },
    removeFromProjectList(state, action) {
      state.projectList = state.projectList?.filter(
        (p) => p !== action.payload
      );
    },
  },
});

export const { addToProjectList, removeFromProjectList } = filterSlice.actions;
export default filterSlice.reducer;
