import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

export const HistoryModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [history, setHistory] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  };

  useEffect(() => {
    const fetchAccountNumber = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/accountNumber', { headers: headers });
        const accountNumber = response.data.accountNumber;
        setAccountNumber(accountNumber);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAccountNumber();
  }, []);

  const openModal = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/history/${accountNumber}`, { headers: headers });
      const data = response.data;
      setHistory(data);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={openModal}>Ver historial</Button>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Historial de transacciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {history ? (
            <div>
              {/* Mostrar el historial aquí */}
            </div>
          ) : (
            <p>Cargando historial...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HistoryModal;
