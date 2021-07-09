import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { filmsActions } from '@store/slices/films';
import { FilmListOfLists } from '@components/FilmListOfLists/FilmListOfLists';

export const FilmListContainer: FC = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <FilmListOfLists
      films={state.films.films}
      onRemove={(addDate: number) => dispatch(filmsActions.removeFilm(addDate))}
      onToggleWatch={(addDate: number) => dispatch(filmsActions.toggleWatchFilm(addDate))}
    />
  );
};
