import React, { FunctionComponent } from 'react';
import classes from './AddFilmForm.module.scss';
import classNames from 'classnames';

export interface AddFilmFormProps {}

export const AddFilmForm: FunctionComponent<AddFilmFormProps> = ({}) => {
  return (
    <form className={classes.form}>
      <h2 className={classes.header}>Add film or series</h2>
      <input className={classNames(classes.input, classes.nameInput)} type="text" placeholder="Name" />
      <label className={classes.released}>
        <input type="checkbox" />
        <span>Already released</span>
      </label>
      <input className={classNames(classes.input, classes.dayInput)} type="number" min="1" max="31" placeholder="Day" />
      <input
        className={classNames(classes.input, classes.monthInput)}
        type="number"
        min="1"
        max="12"
        placeholder="Month"
      />
      <select className={classNames(classes.input, classes.quarterInput)} name="select">
        <option disabled selected>
          Quarter of the year
        </option>
        <option value="q1">1 January – 31 March</option>
        <option value="q2">1 April – 30 June</option>
        <option value="q3">1 July – 30 September </option>
        <option value="q4">1 October – 31 December</option>
      </select>
      <input className={classNames(classes.input, classes.yearInput)} type="number" min="2021" placeholder="Year" />
      <button className={classNames(classes.button, classes.addButton)}>Add</button>
      <button className={classNames(classes.button, classes.clearButton)}>Clear</button>
    </form>
  );
};
