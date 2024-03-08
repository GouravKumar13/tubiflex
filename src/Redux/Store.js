import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./slice/Search.slice";

const store = configureStore({
  reducer: {
    chashResults: searchSlice,
  },
});

export default store;
