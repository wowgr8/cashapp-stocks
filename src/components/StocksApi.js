import React, { useState, useEffect } from 'react'
import axios from 'axios';

function StocksApi() {
  // const [stockData, setStockData] = useState(null);

  // useEffect(() => {
  //   getStockData();
  // }, []); 

  // const getStockData = async () => {
  //   try {
  //     const response = await axios.get("https://storage.googleapis.com/cash-homework/cash-stocks-api/portfolio.json");
  //     console.log("data", response.data);
  //     setStockData(response.data);
  //   } catch (error) {
  //     console.error("Error data:", error);
  //   }
  // };

  //What Javascript statement in place of "?" will make the result always be between 6 and 7? const x = 2; let y = 4; function update(arg) { return Math.random() + y * arg; } y = 2; ?; const result = update(x);
  const x = 2;
  let y = 2+1;
  function update(arg) {
    return Math.random() + y * arg;
  }
  
  // y = 2;
  // y += 1;
  const result = update(x);
  console.log(result);


  return (
    <>
      <div>StocksApi</div>
    </>
  )
}

export default StocksApi