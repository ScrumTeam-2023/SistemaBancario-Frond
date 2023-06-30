import { useState, useEffect, useContext } from "react";
import { Product } from "../Product/Product";
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

export const ProductTable = () => {

    const [product, setProduct] = useState([])

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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getProduct = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/product/getProducts')
            setProduct(data.product)
        } catch (err) {
            console.log(err)
        }
    }

    const deleteProduct = async(id) =>{
        try {
            let confirmDeletion = confirm('Are you sure yor want to delete ?')
            if(confirmDeletion){
                const {data} = await axios.delete(`http://localhost:3000/product/deleteProduct/${id}`)
                getProduct()
            }            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
            <table className="table table-danger table-hover table-responsive-sm">
                <thead className="thead-dark">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        product.map(({ _id, name, description, price, stock }, index) => {

                            return(

                                <tr key={index}>
                                    <td>
                                        <h1><MDBIcon fas icon="user-circle fa-1x" /></h1>
                                    </td>
                                    <Product
                                        name={name}
                                        description={description}
                                        price={price}
                                        stock={stock}

                                    >
                                    </Product>
                                    <td><MDBBtn className="btn" color="danger" onClick={() =>deleteProduct(_id)}>DELETE</MDBBtn>
                                        <span>     </span>
                                        {/* espacio entre boton */}
                                        <Link to={`updateProduct/${_id}`}>
                                            <MDBBtn className="btn" color="warning">UPDATE</MDBBtn>
                                        </Link>
                                    </td>
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
