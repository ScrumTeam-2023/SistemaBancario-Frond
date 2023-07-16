import { useState, useEffect, useContext } from "react";
import { Compras } from "../Compra/Compra";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import { Modal } from "@mui/base";
import { Typography, Box } from "@mui/material";
import Swal from "sweetalert2";
import { AuthContext } from "../../Index";

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

export const CompraTable = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1200,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    const [compras, setCompra] = useState([])

    const getCompra = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/compra/getCompras')
            setCompra(data.compra)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCompra()
    }, [])

    return (
        <>
                <div className="left binding color">
                    <MDBIcon fas icon="user-tie fa-4x " />
                    <span>  </span>COMPRAS PANEL
                    <div className="left binding color">
                        <br></br>
                        <h3>Registro de compras realizadas</h3>
                    </div>
                </div>
            
                <br></br>
                <table className="table table-danger table-hover table-responsive-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>User</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            compras.map(({ _id, product, user, cantidad }, index) => {

                                return (

                                    <tr key={index}>
                                        <td>
                                            <h1><MDBIcon fas icon="user-circle fa-1x" /></h1>
                                        </td>
                                        <Compras
                                            product={product}
                                            user={user}
                                            cantidad={cantidad}

                                        >
                                        </Compras>

                                    </tr>
                                )
                            }
                            )
                        }

                    </tbody>
                </table>
            </>
            )
}