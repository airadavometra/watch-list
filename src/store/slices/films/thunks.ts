import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk } from '@store/types';
import { filmsActions } from './slice';

export const filmsThunk = (): AppThunk => (dispatch, getState) => {
  // const {} = getState();
  // dispatch(filmsActions.someAction())
};

export const filmsAsyncThunk = createAsyncThunk('films/fetchExample', async () => {
  // fetch here
});
