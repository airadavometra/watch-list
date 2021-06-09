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
      <FilmList listTitle="Already released:" listItems={['film1']} hasCheckboxes={true} />
      <FilmList listTitle="Coming soon:" listItems={['film2']} hasCheckboxes={false} />
      <FilmList listTitle="Need to wait:" listItems={['film3']} hasCheckboxes={false} />
    </div>
  );
};
