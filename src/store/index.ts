import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from '@store/slices/films';

const reducer = {
  films: filmsReducer,
};

export const store = configureStore({
  reducer,
});
