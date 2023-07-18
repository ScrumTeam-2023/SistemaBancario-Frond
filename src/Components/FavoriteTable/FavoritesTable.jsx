import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Index.jsx'
import Swal from 'sweetalert2';
import { Modal, Typography, Box, TextField, Button } from '@mui/material';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput, 
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export const FavoritesTable = () => {
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState(null);
  const [transferAmount, setTransferAmount] = useState('');
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  };

  const getFavorites = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/favorite/favorites', { headers: headers });
      setFavorites(data);
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || 'Error getting favorites');
    }
  };

  const deleteFavorite = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure you want to delete it?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/favorite/delete/${id}`, { headers: headers });
        getFavorites();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateFavorite = (favorite) => {
    setSelectedFavorite(favorite);
    setIsModalOpen(true);
  };

  const handleTransfer = (favorite) => {
    setSelectedFavorite(favorite);
    setIsModalOpen(true);
  };

  const handleTransferAmount = (event) => {
    setTransferAmount(event.target.value);
  };

  

  const handleTransferSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: token,
      };

      const response = await axios.post(
        'http://localhost:3000/transfer/addTransfer',
        {
          DPI: selectedFavorite.DPI,
          destinationAccount: selectedFavorite.noCuenta,
          amount: transferAmount
        },
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

      setIsModalOpen(false);
      getFavorites();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la transferencia',
        text: error.response ? error.response.data.message : 'Error desconocido',
      });
    }
  };


  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <table className="table table-danger table-hover table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th></th>
            <th>Apodo</th>
            <th>No.Cuenta</th>
            <th>DPI</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {favorites.length > 0 ? (
            favorites.map(({ _id, apodo, noCuenta, DPI }, index) => (
              <tr key={index}>
                <td>
                  <h1><MDBIcon fas icon="user-circle fa-1x" /></h1>
                </td>
                <td>{apodo}</td>
                <td>{noCuenta}</td>
                <td>{DPI}</td>
                <td>
                  <MDBBtn className="btn" color="danger" onClick={() => deleteFavorite(_id)}>DELETE</MDBBtn>
                  <span>     </span>
                  {/* <MDBBtn className="btn" color="warning" onClick={() => updateFavorite({ _id, apodo, noCuenta, DPI })}>
                    Update
                  </MDBBtn> */}
                  <span>     </span>
                  <MDBBtn className="btn" color="primary" onClick={() => handleTransfer({ _id, apodo, noCuenta, DPI })}>
                    Transfer
                  </MDBBtn>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No favorites found</td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-title" variant="h6" component="h2">
            {selectedFavorite ? `Transfer ${selectedFavorite.apodo}` : ''}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            <TextField
              label="Transfer Amount"
              value={transferAmount}
              onChange={handleTransferAmount}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleTransferSubmit}
            >
              Transfer
            </Button>
          </Typography>
        </Box>
      </Modal>
        
    </>
  );
};
