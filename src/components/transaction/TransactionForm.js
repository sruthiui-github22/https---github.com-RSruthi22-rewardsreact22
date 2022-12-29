import { useState } from 'react' ;
import { useForm } from 'react-hook-form';
import { Button, FormLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTransaction } from '../../store/transactionSlice' ;
import { addReward } from '../../store/rewardSlice' ;
import  TransactionApi  from './TransactionApi' ;

// Transaction data entry
const TransactionForm = () => {
    const [ newtran, setNewtran ] = useState();
    const [ newreward, setNewreward ] = useState();
    const dispatch = useDispatch();
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (values) => { 
        const myTran = JSON.stringify(values);
        let tid = nanoid();
        dispatch(addTransaction({ id: tid, payment: JSON.stringify(values )  })); 
        let transactions = { ...values, tid } ;
        console.log("#",transactions);
        setNewtran( values ) ;
        fetch('http://localhost:3080/transactions', {
            method: 'POST',
            body: JSON.stringify( transactions ),
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => res.json())
            .then(json => setNewtran(json.tran))
            .catch(function(error) {
                alert(error);
                console.log(error);
            });

        // Calculate reward for Transaction and add to store
        let trewards = calculateRewardPoints(values.tamount) ;
        alert( "rewards " + trewards )  ;
        if ( trewards > 0 ) {
        let rewardObj =  { 
            "rname": "",
            "rdate": "",
            "reward": 0
          };
        let myRewardStr = JSON.stringify( rewardObj ) ;
        rewardObj.rname = values.tname ;
        rewardObj.rdate = values.tdate ;
        rewardObj.reward = calculateRewardPoints( values.tamount );

        //console.log( JSON.stringify(rewardObj) );
        let rid = nanoid();
        dispatch(addReward( { id: rid , rewardpoints: JSON.stringify(rewardObj) } )); 
        let rewards =  { ...rewardObj , rid } ;
        setNewreward( rewardObj ) ;
        console.log( rewardObj );
        fetch('http://localhost:3080/rewards', {
            method: 'POST',
            body: JSON.stringify( rewards ),
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => res.json())
            .then(json => setNewreward(json.rwrd))
            .catch(function(error) {
                console.log(error);
            });
        }
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
        <span><FormLabel>customername</FormLabel>
            <input
                {...register("tname", {
                    required: true,
                    minLength: 3,
                    validate: value => value !== "admin" || "Nice try!"
                })}
            />
            { errors.tname && errors.tname.message }
            { '    ' }
 
            <input
                type="date"
                {...register("tdate", {
                required: "Required",
                pattern: {
                    value: /^20[1-2][0-9]-[0-1][0-2]-[0-2][0-9]$/i,
                    message: "Invalid date yyyy-mm-dd. Ex: 2019-02-12"
                }
                })}
            />
            { errors.trandate && errors.trandate.message }
            { '    ' }

            <input
                {...register("tamount", {
                validate: value => value > 0.0 || "Positive amounts plz!"
                })}
            />
            { errors.tamount && errors.tamount.message }
            { '    ' }
            
            <Button type="submit" >
                Post Transaction
            </Button>
        </span>

      </form>
    </div>
  );
};


//
// rewards for the transaction as per spec
//
function calculateRewardPoints( tranamount ) {
   let totalRewards = 0.0;

    if (tranamount > 50.0 && tranamount <= 100.0)
    {
        totalRewards = tranamount - 50.0;
    }
    if (tranamount > 100.0 )
    {
        totalRewards = ((tranamount - 100 ) * 2 + 50);
    }
    //totalRewards = Math.round(belowHundredRewards + excesHundredRewards) ;
    return totalRewards;
}

export default TransactionForm ;
