import { Header } from '@components/Header/Header';
import { AddFilmFormContainer } from '@containers/AddFilmFormContainer';
import { FilmListContainer } from '@containers/FilmListContainer';
import React, { FunctionComponent } from 'react';
import classes from './App.module.scss';

export const App: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <Header text="Watch list" />
      <AddFilmFormContainer />
      <FilmListContainer />
    </div>
  );
};
