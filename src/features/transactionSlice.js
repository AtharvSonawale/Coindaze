import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  credits: [],
  debits: [],
  history: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addCredit: (state, action) => {
      state.balance += action.payload;
      state.credits.push(action.payload);
      state.history.push({ type: 'Credit', amount: action.payload, date: new Date() });
    },
    addDebit: (state, action) => {
      state.balance -= action.payload;
      state.debits.push(action.payload);
      state.history.push({ type: 'Debit', amount: action.payload, date: new Date() });
    },
  },
});

export const { addCredit, addDebit } = transactionSlice.actions;
export default transactionSlice.reducer;
