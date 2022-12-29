import { useState } from 'react' ;
import { useForm } from 'react-hook-form';
import { Button, FormLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTransaction } from '../../store/transactionSlice' ;
import { addReward } from '../../store/rewardSlice' ;
import { json } from 'react-router-dom';
import axios from 'axios';
//import  TransactionApi  from './TransactionApi' ;

// ReportForm prompt and Totals
const ReportForm = () => {
    const [ total, setTotal ] = useState();
    //const [ newreward, setNewreward ] = useState();
    //const dispatch = useDispatch();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [data, setData] = useState([]);
    const [ totalMonthlyRewards, setTotalMonthlyRewards ] = useState();

    const onSubmit = (values) => { 
       console.log("rewards");
       axios.get('http://localhost:3080/rewards')
        .then(res => setData(res.data))
        .catch(function(error) {
            alert(error);
            console.log(error);
        });  
        //alert("B4 totals");
     //alert(JSON.stringify(data[1]));
     let totalReward = 0;
     const totalList = data.map((reward) => { 
        //alert( "rname" + reward.rname );
        //alert( values.reqname );
        if( (values.reqname === reward.rname)
             && ( reward.rdate >= values.fromdate  && reward.rdate <= values.todate )) {
                //alert("loop totals");
               // alert( reward );
                
                totalReward = totalReward +  reward.reward ;
                //alert (totalReward);
             }
        
       });
       setTotalMonthlyRewards(totalReward);
    }


  return (
     <div  style = { {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        height: '10vh',
      } }
      >

    <form onSubmit={handleSubmit(onSubmit)}>
        <span><FormLabel>Customer Name</FormLabel>
            <input
                {...register("reqname", {
                    required: true,
                    minLength: 3,
                    validate: value => value !== "admin" || "Nice try!"
                })}
            />
            { errors.reqname && errors.reqname.message }
            { '    ' }
            <FormLabel>Fromdate</FormLabel>
            <input
                type="date"
                {...register("fromdate", {
                required: "Required",
                pattern: {
                    value: /^20[1-2][0-9]-[0-1][0-2]-[0-2][0-9]$/i,
                    message: "Invalid date yyyy-mm-dd. Ex: 2019-02-12"
                }
                })}
            />
            
            { errors.trandate && errors.trandate.message }
            { '    ' }
            <FormLabel>todate</FormLabel>
            <input
                type="date"
                {...register("todate", {
                required: "Required",
                pattern: {
                    value: /^20[1-2][0-9]-[0-1][0-2]-[0-2][0-9]$/i,
                    message: "Invalid date yyyy-mm-dd. Ex: 2019-02-12"
                }
                })}
            />

            <Button type="submit" >
                Get Total Rewards
            </Button>
        </span>

      </form>
      <span>
        <p>
           Total Rewards for  is {totalMonthlyRewards}
        </p>
      </span>
    </div>

  );

}

export default ReportForm ;
