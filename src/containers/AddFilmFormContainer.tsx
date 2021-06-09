import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { AddFilmForm as AddFilmFormComponent } from '@components/AddFilmForm/AddFilmForm';

export const AddFilmFormContainer: FC = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return <AddFilmFormComponent />;
};
