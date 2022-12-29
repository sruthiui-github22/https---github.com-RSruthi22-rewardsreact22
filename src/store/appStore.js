import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './transactionSlice';
import rewardReducer from './rewardSlice';

const appStore = configureStore( {
  reducer: { transactions: transactionReducer ,
  rewards: rewardReducer},
} );

export default appStore;
