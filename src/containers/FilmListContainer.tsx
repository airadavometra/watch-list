import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { FilmList as FilmListComponent } from '@components/FilmList/FilmList';

export const FilmListContainer: FC = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <>
      <FilmListComponent
        listTitle="Already released:"
        listItems={state.films.films.filter((item) => item.released)}
        hasCheckboxes={true}
      />
      <FilmListComponent
        listTitle="Coming soon:"
        listItems={state.films.films.filter((item) => item.releaseDate.year <= 2021)}
        hasCheckboxes={false}
      />
      <FilmListComponent
        listTitle="Need to wait:"
        listItems={state.films.films.filter((item) => item.releaseDate.year > 2021)}
        hasCheckboxes={false}
      />
      <FilmListComponent
        listTitle="Watched:"
        listItems={state.films.films.filter((item) => item.watched)}
        hasCheckboxes={false}
      />
    </>
  );
};
