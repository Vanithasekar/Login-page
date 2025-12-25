import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./pageSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
