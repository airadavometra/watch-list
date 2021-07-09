import React, { FC } from 'react';
import { useAppDispatch } from '@store/hooks';
import { AddFilmForm as AddFilmFormComponent } from '@components/AddFilmForm/AddFilmForm';
import { Film } from '@app-types/film';
import { filmsActions } from '@store/slices/films';

export const AddFilmFormContainer: FC = () => {
  const dispatch = useAppDispatch();

  return <AddFilmFormComponent onAddClick={(film: Film) => dispatch(filmsActions.addFilm(film))} />;
};
