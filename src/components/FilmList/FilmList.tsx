import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import classes from './FilmList.module.scss';

export interface FilmListProps {
  listTitle: string;
  listItems: string[];
  hasCheckboxes: boolean;
}

export const FilmList: FunctionComponent<FilmListProps> = ({ listTitle, listItems, hasCheckboxes }) => {
  return (
    <div className={classes.main}>
      <h2 className={classes.header}>{listTitle}</h2>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {hasCheckboxes ? (
              <label className={classNames('customCheckbox')}>
                <input type="checkbox" />
                <span className={classNames('customCheckboxLabel')}>{item}</span>
              </label>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
