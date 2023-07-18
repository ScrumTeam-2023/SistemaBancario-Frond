import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Modal, Typography, Box } from '@mui/material';
import { FavoritesTable } from '../../Components/FavoriteTable/FavoritesTable';
import { AuthContext } from '../../Index.jsx';
import Swal from 'sweetalert2';

export const FavoritesPage = () => {
  const [open, setOpen] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);
  const { dataUser } = useContext(AuthContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addFavorite = async () => {
    try {
      const apodo = document.getElementById('inputApodo').value;
      const noCuenta = document.getElementById('inputNoCuenta').value;
      const DPI = document.getElementById('inputDPI').value;

      const favoritesData = {
        apodo,
        noCuenta,
        DPI,
        user: dataUser.id
      };

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      };

      const response = await axios.post('http://localhost:3000/favorite/add', favoritesData, { headers });

      if (response.status === 201) {
        Swal.fire('Success', 'Favorite added successfully', 'success');
        setRefreshCount(prevCount => prevCount + 1); // Incrementar el contador para forzar la actualización de la tabla
        handleClose();
      } else {
        Swal.fire('Error', 'Failed to add favorite', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'An error occurred', 'error');
    }
  };

  return (
    <>
      <main>
        <center>
          <div className="left binding color">
            <h1><svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#E3A91C' }} width="1000" height="100" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16"></svg> FAVORITES </h1>
          </div>
          <div>
            <button onClick={handleOpen} className="btn btn-success mb-1 btn-lg"><i className="fa-solid fa-door-closed"></i> ADD FAVORITE</button>
          </div>
        </center>
        <FavoritesTable key={refreshCount} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Agregar Favorito
            </Typography>
            <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }} >
              <form>
                <div className="form-floating mb-3">
                  <input type="text" name="inputApodo" className="form-control" id="inputApodo" placeholder="." />
                  <label htmlFor="inputApodo">Apodo</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" name="inputNoCuenta" className="form-control" id="inputNoCuenta" placeholder="." />
                  <label htmlFor="inputNoCuenta">No Cuenta</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" name="inputDPI" className="form-control" id="inputDPI" placeholder="." />
                  <label htmlFor="inputDPI">DPI</label>
                </div>
                <div className="d-grid">
                  <button onClick={addFavorite} className="btn btn-primary btn-login text-uppercase fw-bold" type="button">ADD</button>
                </div>
                <hr className="my-4" />
                <div className="d-grid mb-2">
                  <button onClick={handleClose} className="btn btn-google btn-login text-uppercase fw-bold" type="button">
                    <i className="fab  me-2"></i> CANCEL
                  </button>
                </div>
              </form>
            </Typography>
          </Box>
        </Modal>
      </main>
    </>
  )
}
