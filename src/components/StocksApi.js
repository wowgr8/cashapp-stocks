import React, { useState, useEffect } from 'react'
import axios from 'axios';

function StocksApi() {
  const [stockData, setStockData] = useState();

  useEffect(()=> {
    getStockData();
  }, [])

  const getStockData = async () =>{
    const data = await axios.get("https://storage.googleapis.com/cash-homework/cash-stocks-api/portfolio.json");
    setStockData(data);
    console.log(data)
    console.log("data")
  };

  return (
    <>
      <div>StocksApi</div>
    </>
  )
}

export default StocksApi