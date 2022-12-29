import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const rewardAdapter = createEntityAdapter();
export const rewardSelectors = rewardAdapter.getSelectors((state) => state.rewards);

const rewardSlice = createSlice({
  name: 'rewards',
  initialState: rewardAdapter.getInitialState({
    deletedRewards: [],
  }),
  reducers: {
    addReward: rewardAdapter.addOne,
    addRewards: rewardAdapter.addMany,
    deleteReward(state, action) {
      state.deletedRewards.push(state.entities[action.payload]);
      rewardAdapter.removeOne(state, action);
    },
    clearRewards: rewardAdapter.removeAll,
    updateReward: rewardAdapter.updateOne,
    restoreReward(state, action) {
        rewardAdapter.addOne(state, action);
        state.deletedRewards = state.deletedRewards.filter(
           (item) => item.id !== action.payload.id
        );
    },
  },
});

export const {
  addReward,
  addRewards,
  deleteReward,
  deleteRewards,
  clearRewards,
  updateReward,
  restoreReward,
} = rewardSlice.actions;

export default rewardSlice.reducer;
