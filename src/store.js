import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './features/transactionSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});
