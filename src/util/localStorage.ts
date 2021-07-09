import { Film } from '@app-types/film';

export const loadState = (): Film[] => {
  try {
    const serializedState = localStorage.getItem('watchList');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

export const saveState = (films: Film[]): void => {
  try {
    const serializedState = JSON.stringify(films);
    localStorage.setItem('watchList', serializedState);
  } catch {}
};
