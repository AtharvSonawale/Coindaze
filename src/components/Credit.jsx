import React from 'react';
import { useSelector } from 'react-redux';

const Credit = () => {
  const credits = useSelector((state) => state.transactions.credits);

  return (
    <div className="p-4 bg-green-100 rounded shadow-md">
      <h2 className="text-2xl font-bold">Credits</h2>
      <ul>
        {credits.map((amount, index) => (
          <li key={index}>${amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Credit;
