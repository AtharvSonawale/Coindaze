import React from 'react';
import { useSelector } from 'react-redux';

const Debit = () => {
  const debits = useSelector((state) => state.transactions.debits);

  return (
    <div className="p-4 bg-red-100 rounded shadow-md">
      <h2 className="text-2xl font-bold">Debits</h2>
      <ul>
        {debits.map((amount, index) => (
          <li key={index}>${amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Debit;
