import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { FilmList as FilmListComponent } from '@components/FilmList/FilmList';
import { filmsActions } from '@store/slices/films';

export const FilmListContainer: FC = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <>
      <FilmListComponent
        listTitle="Already released:"
        listItems={state.films.films.filter((item) => item.released && !item.watched)}
        hasCheckboxes={true}
        onRemove={(addDate: Date) => dispatch(filmsActions.removeFilm(addDate))}
        onWatch={(addDate: Date) => dispatch(filmsActions.watchFilm(addDate))}
      />
      <FilmListComponent
        listTitle="Coming soon:"
        listItems={state.films.films.filter((item) => !item.released && item.releaseDate.year <= 2021)}
        hasCheckboxes={false}
        onRemove={(addDate: Date) => dispatch(filmsActions.removeFilm(addDate))}
        onWatch={(addDate: Date) => dispatch(filmsActions.watchFilm(addDate))}
      />
      <FilmListComponent
        listTitle="Need to wait:"
        listItems={state.films.films.filter((item) => !item.released && item.releaseDate.year > 2021)}
        hasCheckboxes={false}
        onRemove={(addDate: Date) => dispatch(filmsActions.removeFilm(addDate))}
        onWatch={(addDate: Date) => dispatch(filmsActions.watchFilm(addDate))}
      />
      <FilmListComponent
        listTitle="Watched:"
        listItems={state.films.films.filter((item) => item.released && item.watched)}
        hasCheckboxes={false}
        onRemove={(addDate: Date) => dispatch(filmsActions.removeFilm(addDate))}
        onWatch={(addDate: Date) => dispatch(filmsActions.watchFilm(addDate))}
      />
    </>
  );
};
