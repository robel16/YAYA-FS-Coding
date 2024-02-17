import React, { useState, useEffect } from "react";
import apiService from "../service/yayaApi";

const TransactionList = ({ onTransactionsFetched }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Since we're passing data to the parent component, we don't render anything here
  return null;
};

export default TransactionList;
