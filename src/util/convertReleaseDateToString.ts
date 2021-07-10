import { ReleaseDate } from './../types/film';
export const convertReleaseDateToString = (releaseDate: ReleaseDate): string => {
  let result = '';
  if (releaseDate.year) {
    result = releaseDate.year + result;
    if (releaseDate.month) {
      result = releaseDate.month + result;
      if (releaseDate.day) {
        result = releaseDate.day + result;
      }
    }
  }
  return result;
};
