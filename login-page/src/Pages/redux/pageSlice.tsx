import { createSlice } from "@reduxjs/toolkit";

type ContentState = {
  content: string;
};

const initialState: ContentState = {
  content: "This is Home Page",
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    showHome: (state) => {
      state.content = "This is Home Page";
    },
    showContact: (state) => {
      state.content = "This is Contact Page";
    },
  },
});

export const { showHome, showContact } = contentSlice.actions;
export default contentSlice.reducer;
