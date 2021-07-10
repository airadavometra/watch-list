import React, { FunctionComponent, MouseEvent, useState } from 'react';
import classes from './AddFilmForm.module.scss';
import classNames from 'classnames';
import { Film } from '@app-types/film';
import { validate } from 'util/validateInput';
import ErrorImg from '@icons/error.svg';

export interface AddFilmFormProps {
  onAddClick(film: Film): void;
}

export const AddFilmForm: FunctionComponent<AddFilmFormProps> = ({ onAddClick }) => {
  const [name, setName] = useState('');
  const [isReleased, setIsReleased] = useState(false);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const clearForm = (event: MouseEvent): void => {
    event.preventDefault();
    setName('');
    setIsReleased(false);
    setDay('');
    setMonth('');
    setYear('');
    setErrorMessage('');
  };
  const collectAndSaveFormData = (event: MouseEvent): void => {
    event.preventDefault();
    const film = {
      filmName: name,
      releaseDate: {
        day: Number(day),
        month: Number(month),
        year: Number(year),
      },
      addDate: Date.now(),
      watched: false,
      released: isReleased,
    };
    try {
      validate(film);
      onAddClick(film);
      clearForm(event);
    } catch (err) {
      setErrorMessage(err.message);
    }
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
        <input type="checkbox" checked={isReleased} onChange={() => setIsReleased(!isReleased)} />
        <span className={classNames('customCheckboxLabel')}>Already released</span>
      </label>
      <input
        className={classNames(classes.input, classes.dayInput)}
        value={day}
        onChange={(e) => setDay(e.target.value)}
        type="number"
        placeholder="Day"
        disabled={isReleased}
      />
      <input
        className={classNames(classes.input, classes.monthInput)}
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        type="number"
        placeholder="Month"
        disabled={isReleased}
      />
      <input
        className={classNames(classes.input, classes.yearInput)}
        value={year}
        onChange={(e) => setYear(e.target.value)}
        type="number"
        placeholder="Year"
        disabled={isReleased}
      />
      <button className={classNames(classes.button, classes.addButton)} onClick={collectAndSaveFormData}>
        Add
      </button>
      <button className={classNames(classes.button, classes.clearButton)} onClick={(event) => clearForm(event)}>
        Clear
      </button>
      {errorMessage && (
        <div className={classes.errorMessage}>
          <ErrorImg className={classes.errorImg} />
          {errorMessage}
        </div>
      )}
    </form>
  );
};
