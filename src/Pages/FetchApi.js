import React, { useState, useEffect } from "react";
import '../App.css';


function FetchAPI() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});

  //Get Method
  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiGet();
    console.log(inputs);
  };

  //   useEffect(() => {
  //     apiGet();
  //   }, []);

  return (
    <div>
      <h2>FAKE API</h2>
      <hr/>
      <button onClick={apiGet} className='api-button'>Fetch API</button>
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
          <table>
            <tr >
              <th>NAME</th>
              <th>PHONE</th>
              <th>WEBSITE</th>
              <th>EMAIL</th>
            </tr>
          {data.map((item) => (
             <tr  key={item.id}>
               <td>{item.name} </td>
               <td>{item.phone} </td>
               <td>{item.website} </td>
               <td>{item.email} </td>
             </tr>
          ))}
        </table>
      </div>
    </div>  
  );
}

export default FetchAPI;
