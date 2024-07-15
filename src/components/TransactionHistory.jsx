import React from 'react';
import { useSelector } from 'react-redux';

const TransactionHistory = () => {
  const history = useSelector((state) => state.transactions.history);

  return (
    <div className="p-4 bg-gray-200 rounded shadow-md">
      <h2 className="text-2xl font-bold">Transaction History</h2>
      <ul>
        {history.map((transaction, index) => (
          <li key={index}>
            {transaction.date.toLocaleString()}: {transaction.type} ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
