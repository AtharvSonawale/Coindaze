import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const balance = useSelector((state) => state.transactions.balance);

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold">Balance</h2>
      <p className="text-xl">${balance}</p>
    </div>
  );
};

export default Balance;
