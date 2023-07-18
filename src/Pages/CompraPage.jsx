import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Index';
import { useParams } from 'react-router-dom';
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
}from 'mdb-react-ui-kit';


export const CompraPage = () => {
  const { id } = useParams();

  const { setLoggedIn, dataUser } = useContext(AuthContext);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  };

  const [cantidad, setCantidad] = useState('');

  const compra = async () => {
    if (cantidad.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campo vacío',
        text: 'Por favor ingresa la cantidad de productos a comprar'
      });
      return;
    }

    try {
      let compra = {
        cantidad
      };
      const { data } = await axios.post(`http://localhost:3000/compra/compra/${id}`, compra, { headers });
      console.log(data);

      if (data.message === 'No hay suficientes productos') {
        Swal.fire({
          icon: 'warning',
          title: 'No hay suficientes productos',
          text: 'No hay suficientes productos disponibles para realizar la compra'
        });
      } else if (data.message === 'No hay suficiente presupuesto') {
        Swal.fire({
          icon: 'warning',
          title: 'No hay suficiente saldo',
          text: 'No tienes suficiente saldo para realizar la compra'
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Compra exitosa',
          text: '¡La compra se realizó correctamente!'
        });
      }
    } catch (err) {
      console.log(err);

      Swal.fire({
        icon: 'error',
        title: 'Error en la compra',
        text: 'Ocurrió un error al realizar la compra'
      });
    }
  };

  const addThem = () => {
    compra();
  };

  return (
    <>
      <MDBIcon fas icon="cogs fa-4x" />
      <span> </span>
      <br></br>
      <br></br>
      <div className="left binding color">
        <MDBIcon fas icon="user-tie fa-4x" />
        <span> </span>
        USER PANEL
        <div className="left binding color">
          <br></br>
          <h3>You can see here all the users stored in our not fictional DB</h3>
        </div>
      </div>
      <div></div>

      <div>
        <form>
          <h5>Products Values</h5>

          <>
            <MDBCol col="6">
              <label htmlFor="inputCant" className="form-label">
                Cantidad
              </label>
              <input
                type="number"
                className="form-control mb-4"
                id="inputCant"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                required
              />
            </MDBCol>
          </>
        </form>

        <Link to="/panel/product">
          <span>
            <button className="btn btn-success" onClick={() => addThem()}>
              Save Changes
            </button>
          </span>
        </Link>

        <Link to="/panel/product">
          <span>
            <button className="btn btn-danger">Cancel</button>
          </span>
        </Link>
      </div>
    </>
  );
};
