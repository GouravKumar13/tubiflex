import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: {
    caches: {},
  },

  reducers: {
    chacheResults: (state, action) => {
      state.caches = Object.assign(state.caches, action.payload);
    },
  },
});

export default SearchSlice.reducer;
export const { chacheResults } = SearchSlice.actions;
