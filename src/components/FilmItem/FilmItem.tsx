import { Film } from '@app-types/film';
import React, { FC } from 'react';
import { convertFilmToString } from 'util/convertFilmToString';
import classes from './FilmItem.module.scss';

export interface FilmItemProps {
  filmInfo: Film;
}

export const FilmItem: FC<FilmItemProps> = ({ filmInfo }) => {
  return <div className={classes.main}>{convertFilmToString(filmInfo)}</div>;
};
