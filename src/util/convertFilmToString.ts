import { Film } from '../types/film';
export const convertFilmToString = (film: Film): string => {
  let result = film.filmName;
  let date = '';
  if (film.releaseDate.year) {
    date = film.releaseDate.year.toString();
    if (film.releaseDate.month) {
      date = `${film.releaseDate.month}.${date}`;
      if (film.releaseDate.day) {
        date = `${film.releaseDate.day}.${date}`;
      }
    }
  }
  if (date) {
    result = `${result} - ${date}`;
  }
  return result;
};
