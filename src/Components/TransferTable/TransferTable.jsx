import React, { useState } from 'react';
import axios from 'axios';

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchType, setSearchType] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/transfers/account/{accountNumber}`);
      const transferData = response.data;
      setTransactions(transferData);
      setSearchType('transfers');
    } catch (error) {
      console.error('Error al buscar las transferencias:', error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleSearch}>Buscar Transferencias</button>
      </div>
      <table> 
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction._id}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {searchType && <p>Mostrando resultados de: {searchType}</p>}
    </div>
  );
};

export default TransactionTable;
