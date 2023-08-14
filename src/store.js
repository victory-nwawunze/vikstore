import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../src/features/themeSlice";
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
export default store;
