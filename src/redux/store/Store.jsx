import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../reducer/Reducer';

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
})