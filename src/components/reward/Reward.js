import React from 'react';
import { useDispatch } from 'react-redux';
import { updateReward, deleteReward } from '../../store/rewardSlice' ;

const Reward = ({ id, rewardpoints }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteReward(id));
  };

  return (
    <div className='reward'>
      <span>{rewardpoints}</span>
    </div>
  );
};

export default Reward;
