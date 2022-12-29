import useFetch from "react-fetch-hook";
 
export default function TransactionApi() {

 const requestOptions = {
    method:  'POST',
    headers:  {"Content-type":"application/json"},
    body: JSON.stringify({
        "id": 82,
        "tranId": 2028,
        "tranDate": "220801",
        "name": "Alice",
        "amount": 20
      })
  };

  alert ('B4 fetch  ');
  const { isLoading, data, error } = useFetch("http://localhost:3080/transactions", 
                                          requestOptions);
   alert ('AFter fetch  ');
   
  if (error) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    )
  }
 
  if (!isLoading) {
    console.log(data);
    alert( 'postung tran ') ;
   // data.map( itm => console.log( "Itm " + itm ) );
  }
 
  return (
    <>
      <div className="App">
        {isLoading && <p>Loading...</p>}
        {!isLoading && <p> Fetch { data.map( itm =>  "Itm " + itm.tid + " " ) } </p> } 
        {!isLoading && <p> Fetch   </p> } 
      </div>
    </>
  )
}

export function TransactionGet() {
 
  const { isLoading, data, error } = useFetch("http://localhost:3080/transactions");
 
   if (error) {
     return (
       <div>
         <p>Code: ${error.status}</p>
         <p>Message: ${error.statusText}</p>
       </div>
     )
   }
  
   if (!isLoading) {
     console.log(data);
     alert( 'get tran ') ;
    // data.map( itm => console.log( "Itm " + itm ) );
   }
  
   return (
     <>
       <div className="App">
         {isLoading && <p>Loading Transactions ...</p>}
         {!isLoading && <p>Transaction { data.map( trn =>  "trnsaction " + trn.tid + " " ) } </p> } 
         {!isLoading && <p> End   </p> } 
       </div>
     </>
   )
 }
 
