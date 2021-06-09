import { Film } from '@app-types/film';
import { createSlice } from '@reduxjs/toolkit';

interface State {
  films: Film[];
}

const initialState: State = {
  films: [],
};

const slice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    addFilm: (state, { payload: film }) => {
      state.films.push(film);
    },
    watchFilm: (state, { payload: index }) => {
      state.films[index].watched = true;
    },
    removeFilm: (state, { payload: index }) => {
      state.films.splice(index, 1);
    },
  },
});

export const filmsReducer = slice.reducer;
export const filmsActions = slice.actions;
