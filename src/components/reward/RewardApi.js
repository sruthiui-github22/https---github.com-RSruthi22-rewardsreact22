import useFetch from "react-fetch-hook";
 
export default function RewardApi() {
  
 const requestOptions = {
    method: 'POST',
    headers: {"Content-type":"application/json"},
    body: JSON.stringify({
            "id": 3,
            "rid": 303,
            "rdate": "2022-11-18",
            "rname": "Carol",
            "reward": 45
          }
      )
  };

  const { isLoading, data, error } = useFetch("http://localhost:3080/rewards");

//  const { isLoading, data, error } = useFetch("http://localhost:3080/rewards", 
  //                                        requestOptions);

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
    alert( "Data " + JSON.stringify(data) );
    data.map( itm => console.log( itm.rname ) );
  }
 
  return (
    <>
      <div style = { {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                height: '10vh',
        } }
        >
        
        { isLoading && <p>Rewards Loading...</p>}
        { ! isLoading && <p> { data.map( itm => JSON.stringify( itm )  ) 
                             } </p> }
        </div>
    </>
  )

}
