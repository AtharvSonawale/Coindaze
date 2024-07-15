import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCredit, addDebit } from '../features/transactionSlice';

const AddTransaction = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleAddCredit = () => {
    dispatch(addCredit(Number(amount)));
    setAmount(0);
  };

  const handleAddDebit = () => {
    dispatch(addDebit(Number(amount)));
    setAmount(0);
  };

  return (
    <div className="p-4 bg-blue-100 rounded shadow-md">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleAddCredit} className="ml-2 bg-green-500 text-white p-2 rounded">
        Add
      </button>
      <button onClick={handleAddDebit} className="ml-2 bg-red-500 text-white p-2 rounded">
        Subtract
      </button>
    </div>
  );
};

export default AddTransaction;
