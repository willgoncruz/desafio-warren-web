import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { getTransactionList } from './api/transaction';
import { Transaction } from './model/transaction';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getTransactionList().then((data: Transaction[]) => {
      setTransactions(data);
    });
  }, [])


  console.log(transactions);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
