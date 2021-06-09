import React, { FunctionComponent } from 'react';
import classes from './Header.module.scss';

export interface HeaderProps {
  text: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ text }) => {
  return (
    <header>
      <h1 className={classes.main}>{text}</h1>
    </header>
  );
};
