import React, { useState, useEffect } from 'react'
import axios from 'axios';

function StocksApi() {
  const [stockData, setStockData] = useState();

  useEffect(() => {
    getStockData();
  }, []); 

  const getStockData = async () => {
    try {
      const response = await axios.get(`https://storage.googleapis.com/cash-homework/cash-stocks-api/portfolio.json`);
      console.log("data", response.data);
      setStockData(response.data);

    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  return (
    <>
      <div>StocksApi</div>
    </>
  )
}

export default StocksApi