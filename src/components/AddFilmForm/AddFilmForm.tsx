import React, { FunctionComponent, MouseEvent, useState } from 'react';
import classes from './AddFilmForm.module.scss';
import classNames from 'classnames';
import { Film } from '@app-types/film';

export interface AddFilmFormProps {
  onAddClick(film: Film): void;
}

export const AddFilmForm: FunctionComponent<AddFilmFormProps> = ({ onAddClick }) => {
  const [name, setName] = useState('');
  const [isReleased, setIsReleased] = useState(false);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [quarter, setQuarter] = useState('DEFAULT');
  const [year, setYear] = useState('');

  const clearForm = (event: MouseEvent): void => {
    event.preventDefault();
    setName('');
    setIsReleased(false);
    setDay('');
    setMonth('');
    setQuarter('DEFAULT');
    setYear('');
  };
  const collectAndSaveFormData = (event: MouseEvent): void => {
    event.preventDefault();
    onAddClick({
      filmName: name,
      releaseDate: {
        day: day,
        month: month,
        year: year,
        quarter: quarter,
      },
      addDate: Date.now(),
      watched: false,
      released: isReleased,
    });
  };

  return (
    <form className={classes.form}>
      <h2 className={classes.header}>Add film or series</h2>
      <input
        className={classNames(classes.input, classes.nameInput)}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <label className={classNames(classes.released, 'customCheckbox')}>
        <input type="checkbox" checked={isReleased} onClick={() => setIsReleased(!isReleased)} />
        <span className={classNames('customCheckboxLabel')}>Already released</span>
      </label>
      <input
        className={classNames(classes.input, classes.dayInput)}
        value={day}
        onChange={(e) => setDay(e.target.value)}
        type="number"
        min="1"
        max="31"
        placeholder="Day"
      />
      <input
        className={classNames(classes.input, classes.monthInput)}
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        type="number"
        min="1"
        max="12"
        placeholder="Month"
      />
      <select
        className={classNames(classes.input, classes.quarterInput)}
        value={quarter}
        onChange={(e) => setQuarter(e.target.value)}
        name="select"
      >
        <option value="DEFAULT" disabled>
          Quarter of the year
        </option>
        <option value="0">1 January – 31 March</option>
        <option value="1">1 April – 30 June</option>
        <option value="2">1 July – 30 September </option>
        <option value="4">1 October – 31 December</option>
      </select>
      <input
        className={classNames(classes.input, classes.yearInput)}
        value={year}
        onChange={(e) => setYear(e.target.value)}
        type="number"
        min="1900"
        max="2500"
        placeholder="Year"
      />
      <button className={classNames(classes.button, classes.addButton)} onClick={collectAndSaveFormData}>
        Add
      </button>
      <button className={classNames(classes.button, classes.clearButton)} onClick={(event) => clearForm(event)}>
        Clear
      </button>
    </form>
  );
};
