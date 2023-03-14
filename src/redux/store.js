import { configureStore } from "@reduxjs/toolkit";
import MovieSearchSlice from "../components/MovieSearch/MovieSearchSlice";
import favoriteSlice from "../pages/FavoritePage/favoriteSlice";

const store = configureStore({
  reducer: {
    search: MovieSearchSlice,
    favorite: favoriteSlice,
  },
});

export default store;
