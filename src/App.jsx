import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Balance from './components/Balance';
import Credit from './components/Credit';
import Debit from './components/Debit';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-slate-700">
        <h1 className="m-4 text-2xl font-bold">Sagespender</h1>
        <div className="flex">
          <div className='float-left '>
          <Credit />
          <Debit />
          <TransactionHistory />
          </div>
          <div className='h-screen'>
          <Balance />
          <AddTransaction />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
