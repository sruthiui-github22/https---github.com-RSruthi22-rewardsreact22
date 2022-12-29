import { Link } from "react-router-dom";
import AppNavbar from "../AppNavBar";

import TransactionForm from "../../transaction/TransactionForm";
import TransactionList from "../../transaction/TransactionList";
//import TransactionApi from "../../transaction/TransactionApi";

export default function TransactionPage() {

    return (
        <div  style = { {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'Left',
          alignItems: 'Left',
          height: '100vh',
          marginLeft: '10vh',
          marginRight: '10vh',
        } }
      >
        <AppNavbar />
        
        <h1>Transactions</h1>

        <TransactionForm />

        <TransactionList />

      </div>
    );

};