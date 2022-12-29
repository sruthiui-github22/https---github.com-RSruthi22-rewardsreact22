
import AppNavbar from "../AppNavBar";

import styles from '../navside.css';

import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';

import { useForm } from 'react-hook-form';
import axios from 'axios';

const columns = [
    {
        name: 'rname',
        selector: row => row.rname,
        sortable: true,
    },
    {
        name: 'rdate',
        selector: row => row.rdate,
        sortable: true,
    },
    {
        name: 'reward',
        selector: row => row.reward,
    },
];



 function ReportPage() {


  
  const [data, setData] = useState([]);
  useEffect(()=>{
    console.log("rewards")
    axios.get('http://localhost:3080/rewards')
    .then(res => setData(res.data))
    .catch(function(error) {
        alert(error);
        console.log(error);
    });    
 },[])
  console.log("#",data)
  // Using useEffect to call the API once mounted and set the data
    return (
    <div
        style={ {
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
  
     <h1>Rewards Page</h1>
     <div className="tableContainer">
        <DataTable
            columns={columns}
            data={data}
        />
    </div>
    <br></br>
    <p>Please view reports in reports page</p>
    </div>
  );
}

export default ReportPage;

