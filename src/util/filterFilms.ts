import { Film, Quarter } from '@app-types/film';

export const getQuarter = (month: number): Quarter => {
  return month < 3 ? Quarter.Q1 : month < 6 ? Quarter.Q2 : month < 9 ? Quarter.Q3 : Quarter.Q4;
};

export const filterFilms = (films: Film[]) => {
  const currentDate = new Date();
  const comingSoonDate = new Date();
  comingSoonDate.setMonth(comingSoonDate.getMonth() + 1);

  const unknown = films.filter((item) => !item.released && !item.watched && !item.releaseDate.year);
  const watched = films.filter((item) => item.watched);
  const released = films.filter(
    (item) =>
      !item.watched &&
      (item.released ||
        (item.releaseDate.year &&
          (item.releaseDate.year < currentDate.getFullYear() ||
            (item.releaseDate.year === currentDate.getFullYear() &&
              item.releaseDate.month &&
              item.releaseDate.month < currentDate.getMonth() + 1) ||
            (item.releaseDate.year === currentDate.getFullYear() &&
              item.releaseDate.month === currentDate.getMonth() + 1 &&
              item.releaseDate.day &&
              item.releaseDate.day < currentDate.getDate()) ||
            (item.releaseDate.year === currentDate.getFullYear() &&
              item.releaseDate.quarter &&
              item.releaseDate.quarter <= getQuarter(currentDate.getMonth())))))
  );
  const comingSoon = films.filter(
    (item) =>
      !item.watched &&
      !item.released &&
      !(
        item.releaseDate.year &&
        (item.releaseDate.year < currentDate.getFullYear() ||
          (item.releaseDate.year === currentDate.getFullYear() &&
            item.releaseDate.month &&
            item.releaseDate.month < currentDate.getMonth() + 1) ||
          (item.releaseDate.year === currentDate.getFullYear() &&
            item.releaseDate.month === currentDate.getMonth() + 1 &&
            item.releaseDate.day &&
            item.releaseDate.day < currentDate.getDate()) ||
          (item.releaseDate.year === currentDate.getFullYear() &&
            item.releaseDate.quarter &&
            item.releaseDate.quarter <= getQuarter(currentDate.getMonth())))
      ) &&
      item.releaseDate.year &&
      (item.releaseDate.year < comingSoonDate.getFullYear() ||
        (item.releaseDate.year === comingSoonDate.getFullYear() &&
          item.releaseDate.month &&
          item.releaseDate.month < comingSoonDate.getMonth() + 1) ||
        (item.releaseDate.year === comingSoonDate.getFullYear() &&
          item.releaseDate.month === comingSoonDate.getMonth() + 1 &&
          item.releaseDate.day &&
          item.releaseDate.day < comingSoonDate.getDate()) ||
        (item.releaseDate.year === comingSoonDate.getFullYear() &&
          item.releaseDate.quarter &&
          item.releaseDate.quarter <= getQuarter(comingSoonDate.getMonth())))
  );
  const needToWait = films.filter(
    (item) =>
      !item.watched &&
      !item.released &&
      item.releaseDate.year &&
      (item.releaseDate.year > comingSoonDate.getFullYear() ||
        (item.releaseDate.year === comingSoonDate.getFullYear() &&
          item.releaseDate.month &&
          item.releaseDate.month > comingSoonDate.getMonth() + 1) ||
        (item.releaseDate.year === comingSoonDate.getFullYear() &&
          item.releaseDate.month === comingSoonDate.getMonth() + 1 &&
          item.releaseDate.day &&
          item.releaseDate.day > comingSoonDate.getDate()) ||
        (item.releaseDate.year === comingSoonDate.getFullYear() &&
          item.releaseDate.quarter &&
          item.releaseDate.quarter > getQuarter(comingSoonDate.getMonth())))
  );
  return {
    unknown,
    watched,
    released,
    comingSoon,
    needToWait,
  };
};
