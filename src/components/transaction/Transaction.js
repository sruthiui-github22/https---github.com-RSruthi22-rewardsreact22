import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTransaction, deleteTransaction } from '../../store/transactionSlice' ;

const Transaction = ({ id, payment }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div className='transaction'>
      <span>{payment}</span>
    </div>
  );
};

export default Transaction;
