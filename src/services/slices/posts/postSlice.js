import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: null,
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    setPostFile: (state, action) => {
      state.file = action.payload;
    },

 
  },
});

export const { setPostFile } = postSlice.actions;
export default postSlice.reducer;
