import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Deposit } from '../Deposit/Deposit';
import Swal from 'sweetalert2';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';

export const DepositTable = ({ getAllDeposits }) => {
  const [deposit, setDeposit] = useState([]);

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const response = await axios.get('http://localhost:3000/deposit/get');
        setDeposit(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDeposits();
  }, [getAllDeposits]);

  const cancelDeposit = async (depositId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/deposit/cancel/${depositId}`);
      const { message } = response.data;

      if (message === 'El tiempo de cancelacion ha expirado') {
        Swal.fire({
          icon: 'warning',
          title: 'No se puede cancelar',
          text: 'El tiempo para cancelar este depósito ha expirado.',
          timer: 4000
        });
      } else if (message === 'El depósito se ha cancelado correctamente') {
        Swal.fire({
          icon: 'success',
          title: 'Depósito cancelado',
          text: 'El depósito se ha cancelado correctamente.',
          timer: 4000
        });
      } else if (message === 'El depósito ya ha sido cancelado previamente') {
        Swal.fire({
          icon: 'warning',
          title: 'No se puede cancelar',
          text: 'Este depósito ya ha sido cancelado previamente.',
          timer: 4000
        });
        
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Error al cancelar el depósito',
          icon: 'error'
        });
      }
    }
  };

  return (
    <>
      <table className="table table-danger table-hover table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th></th>
            <th>
              <h5>ID</h5>
            </th>
            <th>No Cuenta</th>
            <th>Amount</th>
            <th>Date</th>
            <th>
              <h2>Options</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {deposit.map(({ _id, noCuenta, amount, date }, index) => (
            <tr key={index}>
              <td>
                <h1></h1>
              </td>
              <td>{_id}</td>
              <td>{noCuenta}</td>
              <td>{amount}</td>
              <td>{date}</td>
              <td>
                {/* Opciones */}
                <td>
                  <MDBBtn className="btn" color="danger" onClick={() => cancelDeposit(_id)}>
                    Cancel
                  </MDBBtn>
                  <MDBBtn className="btn" color="warning">
                    UPDATE
                  </MDBBtn>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
