import { createSlice } from "@reduxjs/toolkit";

const MovieSearchSlice = createSlice({
  name: "movieSearch",
  initialState: {
    keyword: "",
  },
  reducers: {
    seacrhKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { seacrhKeyword } = MovieSearchSlice.actions;
export default MovieSearchSlice.reducer;
