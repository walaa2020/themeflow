import { configureStore } from '@reduxjs/toolkit'
import themeSlice from "./themSlice";
export const store = configureStore({
  reducer: {
    color:themeSlice
  },
})
