import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const transactionAdapter = createEntityAdapter();
export const transactionSelectors = transactionAdapter.getSelectors((state) => state.transactions);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: transactionAdapter.getInitialState({
    deletedTransactions: [],
  }),
  reducers: {
    addTransaction: transactionAdapter.addOne,
    addTransactions: transactionAdapter.addMany,
    deleteTransaction(state, action) {
      state.deletedTransactions.push(state.entities[action.payload]);
      transactionAdapter.removeOne(state, action);
    },
    clearTransactions: transactionAdapter.removeAll,
    updateTransaction: transactionAdapter.updateOne,
    restoreTransaction(state, action) {
        transactionAdapter.addOne(state, action);
        state.deletedTransactions = state.deletedTransactions.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addTransaction,
  addTransactions,
  deleteTransaction,
  deleteTransactions,
  clearTransactions,
  updateTransaction,
  restoreTransaction,
} = transactionSlice.actions;

export default transactionSlice.reducer;
