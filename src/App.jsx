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
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">CoinDaze Spend Tracker</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Balance />
          <AddTransaction />
          <Credit />
          <Debit />
          <TransactionHistory />
        </div>
      </div>
    </Provider>
  );
};

export default App;
