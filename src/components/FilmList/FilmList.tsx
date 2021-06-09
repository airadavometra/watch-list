import React, { FunctionComponent } from 'react';
import classes from './FilmList.module.scss';

export interface FilmListProps {
  listTitle: string;
  listItems: string[];
}

export const FilmList: FunctionComponent<FilmListProps> = ({ listTitle, listItems }) => {
  return (
    <div className={classes.main}>
      <h2 className={classes.header}>{listTitle}</h2>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
