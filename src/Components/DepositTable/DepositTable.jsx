import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon
} from 'mdb-react-ui-kit';

export const DepositTable = ({ getAllDeposits }) => {
  const [deposit, setDeposit] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [depositId, setDepositId] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
  
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

    //CANCEL
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


  const updateDeposit = (depositId, newAmount) => {
    setDepositId(depositId);
    setNewAmount(newAmount);
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/deposit/update/${depositId}`, { amount: newAmount });
      const data = response.data;
  
      if (data.message === 'El depósito se ha actualizado y el saldo de la cuenta beneficiaria se ha actualizado') {
        Swal.fire('Éxito', data.message, 'success');
      } else if (data.message === 'El tiempo de actualización ha expirado') {
        Swal.fire('Error', data.message, 'error');
      } else {
        Swal.fire('Error', 'Ocurrió un error al actualizar el depósito', 'error');
      }
  
      console.log(data.deposit);
      console.log(data.user);
  
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Ocurrió un error al actualizar el depósito', 'error');
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
                <h1><MDBIcon fas icon="piggy-bank" /></h1>
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
                  <MDBBtn className="btn" color="warning" onClick={() => updateDeposit(_id, amount,newAmount )}>
                    Update
                  </MDBBtn>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL UPDATE */}
      <MDBModal show={isModalOpen} tabIndex="-1" fullHeight position="right" centered>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <h5 className="modal-title">Update Deposit</h5>
              <MDBBtn className="btn-close" color="none" onClick={() => setIsModalOpen(false)} />
            </MDBModalHeader>
            <MDBModalBody>
              <div className="mb-3">
                <label htmlFor="newAmount" className="form-label">New Amount:</label>
                <input type="text" className="form-control" id="newAmount" value={newAmount} onChange={(e) => setNewAmount(e.target.value)} />
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={() => setIsModalOpen(false)}>Close</MDBBtn>
              <MDBBtn color="primary" onClick={handleUpdate}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};


