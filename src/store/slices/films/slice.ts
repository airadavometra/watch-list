import { Film } from '@app-types/film';
import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from 'util/localStorage';

interface State {
  films: Film[];
}

const initialState: State = {
  films: loadState(),
};

const slice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    addFilm: (state, { payload: film }) => {
      state.films.push(film);
      saveState(state.films);
    },
    toggleWatchFilm: (state, { payload: addDate }) => {
      const film = state.films.find((item) => item.addDate === addDate);
      if (film) {
        film.watched = !film.watched;
        saveState(state.films);
      }
    },
    removeFilm: (state, { payload: addDate }) => {
      const film = state.films.find((item) => item.addDate === addDate);
      if (film) {
        state.films.splice(state.films.indexOf(film), 1);
        saveState(state.films);
      }
    },
    saveFilms: (state) => {
      saveState(state.films);
    },
  },
});

export const filmsReducer = slice.reducer;
export const filmsActions = slice.actions;
