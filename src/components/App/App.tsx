import { AddFilmForm } from '@components/AddFilmForm/AddFilmForm';
import { FilmList } from '@components/FilmList/FilmList';
import { Header } from '@components/Header/Header';
import React, { FunctionComponent } from 'react';
import classes from './App.module.scss';

export const App: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <Header text="Watch list" />
      <AddFilmForm />
      <FilmList listTitle="Already released:" listItems={['film1']} />
      <FilmList listTitle="Coming soon:" listItems={['film2']} />
      <FilmList listTitle="Need to wait:" listItems={['film3']} />
    </div>
  );
};
