import { Film } from '@app-types/film';
import { getQuarter } from './filterFilms';

export const validate = (film: Film) => {
  if (!film.filmName) {
    throw Error('A film name must be set');
  }
  if (film.releaseDate.day) {
    if (!film.releaseDate.month || !film.releaseDate.year) {
      throw Error('Need to set also a month and a year of the film release');
    }
  }
  if (film.releaseDate.month || film.releaseDate.quarter) {
    if (!film.releaseDate.year) {
      throw Error('Need to set also a year of the film release');
    }
  }
  if (film.releaseDate.quarter && film.releaseDate.month) {
    if (film.releaseDate.quarter !== getQuarter(Number(film.releaseDate.month) - 1)) {
      throw Error('Need to set a correct month of the film release');
    }
  }
};
