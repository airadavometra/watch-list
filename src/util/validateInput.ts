import { Film } from '@app-types/film';

export const validate = (film: Film) => {
  if (!film.filmName) {
    throw Error('A film name must be set');
  }
  if (film.releaseDate.day) {
    if (!film.releaseDate.month || !film.releaseDate.year) {
      throw Error('Need to set also a month and a year of the film release');
    }
  }
  if (film.releaseDate.month) {
    if (!film.releaseDate.year) {
      throw Error('Need to set also a year of the film release');
    }
  }
};
