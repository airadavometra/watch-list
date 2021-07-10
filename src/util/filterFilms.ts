import { Film } from '@app-types/film';

export const filterFilms = (films: Film[]) => {
  const currentDate = new Date();
  const comingSoonDate = new Date();
  comingSoonDate.setMonth(comingSoonDate.getMonth() + 1);

  const unknown = films.filter((item) => !item.released && !item.watched && !item.releaseDate.year);
  const watched = films.filter((item) => item.watched);
  const needToWait: Film[] = [];
  const released: Film[] = [];
  const comingSoon: Film[] = [];
  for (const film of films) {
    if (!film.released && !film.watched && film.releaseDate.year) {
      if (film.releaseDate.year <= currentDate.getFullYear()) {
        if (
          film.releaseDate.year < currentDate.getFullYear() ||
          (film.releaseDate.year === currentDate.getFullYear() &&
            film.releaseDate.month &&
            film.releaseDate.month < currentDate.getMonth() + 1) ||
          (film.releaseDate.year === currentDate.getFullYear() &&
            film.releaseDate.month &&
            film.releaseDate.month === currentDate.getMonth() + 1 &&
            film.releaseDate.day &&
            film.releaseDate.day < currentDate.getDate())
        ) {
          released.push(film);
        } else {
          if (
            film.releaseDate.year < comingSoonDate.getFullYear() ||
            (film.releaseDate.year === comingSoonDate.getFullYear() &&
              film.releaseDate.month &&
              film.releaseDate.month < comingSoonDate.getMonth() + 1) ||
            (film.releaseDate.year === comingSoonDate.getFullYear() &&
              film.releaseDate.month &&
              film.releaseDate.month === comingSoonDate.getMonth() + 1 &&
              film.releaseDate.day &&
              film.releaseDate.day < comingSoonDate.getDate())
          ) {
            comingSoon.push(film);
          } else {
            needToWait.push(film);
          }
        }
      } else {
        needToWait.push(film);
      }
    }
  }
  return {
    unknown,
    watched,
    released,
    comingSoon,
    needToWait,
  };
};
