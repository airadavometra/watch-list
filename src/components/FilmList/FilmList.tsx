import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import classes from './FilmList.module.scss';
import BinImg from '@icons/bin.svg';
import { Film } from '@app-types/film';

export interface FilmListProps {
  listTitle: string;
  listItems: Film[];
  hasCheckboxes: boolean;
}

export const FilmList: FunctionComponent<FilmListProps> = ({ listTitle, listItems, hasCheckboxes }) => {
  return (
    <div className={classes.main}>
      <h2 className={classes.header}>{listTitle}</h2>
      <ul>
        {listItems.map((item, index) => (
          <li className={classes.filmContainer} key={index}>
            {hasCheckboxes ? (
              <label className={classNames('customCheckbox')}>
                <input type="checkbox" />
                <span className={classNames('customCheckboxLabel')}>{item}</span>
              </label>
            ) : (
              item
            )}
            <button className={classes.deleteButton}>
              <BinImg className={classes.binImg} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
