import React, { FunctionComponent } from 'react';
import { Film } from '@app-types/film';
import { FilmList } from '@components/FilmList/FilmList';
import { filterFilms } from 'util/filterFilms';

export interface FilmListOfListsProps {
  films: Film[];
  onRemove(addDate: number): void;
  onToggleWatch(addDate: number): void;
}

export const FilmListOfLists: FunctionComponent<FilmListOfListsProps> = ({ films, onRemove, onToggleWatch }) => {
  const { unknown, watched, released, comingSoon, needToWait } = filterFilms(films);
  return (
    <>
      <FilmList
        listTitle="Already released:"
        listItems={released}
        hasCheckboxes={true}
        onRemove={onRemove}
        onToggleWatch={onToggleWatch}
      />
      <FilmList listTitle="Coming soon:" listItems={comingSoon} hasCheckboxes={false} onRemove={onRemove} />
      <FilmList listTitle="Need to wait:" listItems={needToWait} hasCheckboxes={false} onRemove={onRemove} />
      <FilmList
        listTitle="Unknown release date:"
        listItems={unknown}
        hasCheckboxes={true}
        onRemove={onRemove}
        onToggleWatch={onToggleWatch}
      />
      <FilmList
        listTitle="Watched:"
        listItems={watched}
        hasCheckboxes={true}
        onRemove={onRemove}
        onToggleWatch={onToggleWatch}
      />
    </>
  );
};
