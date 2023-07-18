import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export const TransactionHistoryPage = () => {
  const [transactions, setTransactions] = useState({ transfers: [], deposits: [], purchases: [] });
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    getTransactionHistory();
  }, []);

  const getTransactionHistory = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user/history', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      });

      const { transfers, deposits, purchases, compras } = response.data;
      setTransactions({ transfers: transfers || [], deposits: deposits || [], purchases: purchases || [], compras: compras || [] });
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="container">
      <div className="my-4">
        <Button variant="primary" onClick={handleToggleTable}>
          {showTable ? 'Cerrar' : 'Transacción'}
        </Button>
      </div>

      {showTable && (
        <div>
          <h3>Transfers</h3>
          <div className="table-responsive">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Source Account</th>
                  <th>Destination Account</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.transfers.map((transfer) => (
                  <tr key={transfer._id}>
                    <td>{transfer._id}</td>
                    <td>{transfer.sourceAccount}</td>
                    <td>{transfer.destinationAccount}</td>
                    <td>{transfer.amount}</td>
                    <td>{transfer.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <h3>Deposits</h3>
          <div className="table-responsive">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Account</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.deposits.map((deposit) => (
                  <tr key={deposit._id}>
                    <td>{deposit._id}</td>
                    <td>{deposit.noCuenta}</td>
                    <td>{deposit.amount}</td>
                    <td>{deposit.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <h3>Services Adquired</h3>
          <div className="table-responsive">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Service Name</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.purchases.map((purchase) => (
                  <tr key={purchase._id}>
                    <td>{purchase._id}</td>
                    <td>{purchase.serviceName}</td>
                    <td>{purchase.servicePrice}</td>
                    <td>{purchase.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <h3>Compra History</h3>
          <div className="table-responsive">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.compras.map((compra) => (
                  <tr key={compra._id}>
                    <td>{compra._id}</td>
                    <td>{compra.product.name}</td>
                    <td>{compra.cantidad}</td>
                    <td>{compra.product.price}</td>
                    <td>{compra.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};
