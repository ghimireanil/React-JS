import React from 'react';
import { Header } from '../Wallet/Header';
import { Balance } from '../Wallet/Balance';
import { IncomeExpenses } from '../Wallet/IncomeExpenses';
import { TransactionList } from '../Wallet/TransactionList';
import { AddTransaction } from '../Wallet/AddTransaction';

import { GlobalProvider } from '../Wallet/context/GlobalState';

import './Wallet.css';

const Wallet = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default Wallet;
