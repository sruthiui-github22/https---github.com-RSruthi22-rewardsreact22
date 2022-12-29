import React , {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restoreTransaction, clearTransactions, transactionSelectors } 
                from '../../store/transactionSlice' ; 
import Transaction from './Transaction.js';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import styles from '../navigation/navside.css'

const columns = [
  {
      name: 'name',
      selector: row => row.tname,
      sortable: true,
  },
  {
      name: 'date',
      selector: row => row.tdate,
      sortable: true,
  },
  {
      name: 'amount',
      selector: row => row.tamount,
  },
];

const TransactionList = () => {
  const dispatch = useDispatch();
  const allTransactions = useSelector(transactionSelectors.selectEntities);
  const transactionCount = useSelector(transactionSelectors.selectTotal);
  const deletedTransactions = useSelector((state) => state.transactions.deletedTransactions);

  //let transactionList = [];
  for (const id in allTransactions) {
    if (Object.hasOwnProperty.call(allTransactions, id)) {
      const transactionItem = allTransactions[id];
      transactionList.push(
        <Transaction
          key = {transactionItem.id}
          id = {transactionItem.id}
          payment = {transactionItem.payment}
          completed = {transactionItem.completed}
        />
      );
    }
  }

  const restore = (transaction) => {
    dispatch(restoreTransaction(transaction));
  };

  const deletedList = deletedTransactions.map((transaction) => (
    <div className='deleted-tran' key={transaction.id}>
      <span>{transaction.transaction}</span>
      <button onClick={() => restore(transaction)}>Restore</button>
    </div>
  ));

  const clearList = () => {
    dispatch(clearTransactions());
  };
  
  const [transactionList,setTransactionList] = useState([])

  useEffect(()=>{
    console.log("transactions")
    axios.get('http://localhost:3080/transactions')
    .then(res =>setTransactionList(res.data))
    .catch(function(error) {
        alert(error);
        console.log(error);
    });    
 },[])
 console.log(transactionList)

  return (
    <div  style = { {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        height: '60vh',
      } }
      >

      <h4>Your Transactions count: {transactionList.length} </h4>
      <div className="tableContainer">
      <DataTable
            columns={columns}
            data={transactionList}
        />
        </div>

  
      <h5>End of list </h5>

      <h5>Please click on Rewards for reviewing Rewards </h5>
  
    </div>
  );
};

export default TransactionList;
