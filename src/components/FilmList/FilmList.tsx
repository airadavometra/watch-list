import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import classes from './FilmList.module.scss';
import BinImg from '@icons/bin.svg';
import { Film } from '@app-types/film';
import { FilmItem } from '@components/FilmItem/FilmItem';

export interface FilmListProps {
  listTitle: string;
  listItems: Film[];
  hasCheckboxes: boolean;
  onRemove(addDate: Date): void;
  onWatch(addDate: Date): void;
}

export const FilmList: FunctionComponent<FilmListProps> = ({
  listTitle,
  listItems,
  hasCheckboxes,
  onRemove,
  onWatch,
}) => {
  return (
    <div className={classes.main}>
      <h2 className={classes.header}>{listTitle}</h2>
      <ul>
        {listItems.map((item, index) => (
          <li className={classes.filmContainer} key={index}>
            {hasCheckboxes ? (
              <label className={classNames('customCheckbox')}>
                <input type="checkbox" onClick={() => onWatch(item.addDate)} />
                <span className={classNames('customCheckboxLabel')}>
                  <FilmItem filmInfo={item} />
                </span>
              </label>
            ) : (
              <FilmItem filmInfo={item} />
            )}
            <button className={classes.deleteButton} onClick={() => onRemove(item.addDate)}>
              <BinImg className={classes.binImg} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
