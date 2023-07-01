import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Form, Button } from 'react-bootstrap';


export const TransferForm = () => {
  const [sourceAccount, setSourceAccount] = useState('');
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/transfer/addTransfer', {
        sourceAccount,
        destinationAccount,
        amount,
      });

      Swal.fire({
        icon: 'success',
        title: 'Transferencia exitosa',
        text: response.data.message,
        timer: 4000,
      });

      // Restablecer los campos del formulario después de la transferencia exitosa
      setSourceAccount('');
      setDestinationAccount('');
      setAmount('');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la transferencia',
        text: error.response.data.message,
      });
    }
  };

  return (
    <div>
      <h1>Página de Transferencia</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="sourceAccount">
          <Form.Label>Cuenta de origen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la cuenta de origen"
            value={sourceAccount}
            onChange={(e) => setSourceAccount(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="destinationAccount">
          <Form.Label>Cuenta de destino</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la cuenta de destino"
            value={destinationAccount}
            onChange={(e) => setDestinationAccount(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="amount">
          <Form.Label>Monto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el monto a transferir"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Transferir
        </Button>
      </Form>
    </div>
  );
};

export default TransferForm;