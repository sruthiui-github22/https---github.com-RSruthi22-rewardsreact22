import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restoreReward, clearRewards, rewardSelectors } 
                from '../../store/rewardSlice' ; 
import Reward from './Reward.js';

const RewardList = () => {
  const dispatch = useDispatch();
  const allRewards = useSelector(rewardSelectors.selectEntities);
  const rewardCount = useSelector(rewardSelectors.selectTotal);
  const deletedRewards = useSelector((state) => state.rewards.deletedRewards);

  const rewardList = [];
  console.log( "called rewardlist " );
  for (const id in allRewards) {
    console.log( "reward id "   + id);
    if (Object.hasOwnProperty.call(allRewards, id)) {
      const rewardItem = allRewards[id];
      console.log( "loop reward = " + rewardItem.payment );
      rewardList.push(
        <Reward
          key={rewardItem.id}
          id={rewardItem.id}
          rewardpoints={rewardItem.rewardpoints}
          completed={rewardItem.completed}
        />
      );
    }
  }

  const restore = (reward) => {
    dispatch(restoreReward(reward));
  };

  const deletedList = deletedRewards.map((reward) => (
    <div className='deleted-tran' key={reward.id}>
      <span>{reward.reward}</span>
      <button onClick = { () => restore(reward)} >Restore</button>
    </div>
  ));

  const clearList = () => {
    dispatch(clearRewards());
  };

  return (
    <div  style = { {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        height: '40vh',
      } }
      >

      <h4>Your Rewards count:   {rewardCount} </h4>
      <div>{rewardList}</div>
      <h5>End of list </h5>

      <h5>Please click on Transaction for reviewing Transactions </h5>
  
    </div>
  );
};

export default RewardList;
