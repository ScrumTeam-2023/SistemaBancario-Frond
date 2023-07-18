import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export const TransferForm  = () => {
  const [DPI, setDPI] = useState('');
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: token,
      };
  
      const response = await axios.post(
        'http://localhost:3000/transfer/addTransfer',
        { DPI, destinationAccount, amount },
        { headers }
      );
  
      if (response && response.data) {
        Swal.fire({
          icon: 'success',
          title: 'Transferencia exitosa',
          text: response.data.message,
          timer: 4000,
        });
      }
  
      // Restablecer los campos del formulario después de la transferencia exitosa
      setDPI('');
      setDestinationAccount('');
      setAmount('');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la transferencia',
        text: error.response ? error.response.data.message : 'Error desconocido',
      });
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h3 className="text-center mb-4">Formulario de Transferencia</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="DPI">
              <Form.Label>DPI:</Form.Label>
              <Form.Control
                type="text"
                value={DPI}
                onChange={(e) => setDPI(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="destinationAccount">
              <Form.Label>Cuenta de destino:</Form.Label>
              <Form.Control
                type="text"
                value={destinationAccount}
                onChange={(e) => setDestinationAccount(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="amount">
              <Form.Label>Monto:</Form.Label>
              <Form.Control
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Transferir
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TransferForm;