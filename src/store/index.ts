import { configureStore } from '@reduxjs/toolkit';
import { fooReducer } from '@store/slices/foo';
import { exampleReducer } from '@store/slices/example';

const reducer = {
  foo: fooReducer,
  example: exampleReducer,
};

export const store = configureStore({
  reducer,
});
