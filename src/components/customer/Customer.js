import React from "react";
import { useDispatch } from 'react-dom';
import { nanoid } from 'nanoid';

const Customer = ( { cid, custname , custphone } ) => {
// function Customer ( )  {

  //  const dispatch = useDispatch();
   
    return (
        <div>
            <span> { cid } </span>
            <span> { custname } </span>
            <span> { custphone } </span>
        </div>
    ) ;

} 

export default Customer ;
