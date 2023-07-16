import React, { useState , useEffect, useContext }  from 'react'
import Swal from 'sweetalert2'
import { CompraTable } from '../Components/CompraTable/CompraTAble';
import axios from "axios";
import { AuthContext } from '../Index';
import { Link } from "react-router-dom";
import { Modal } from "@mui/base";
import { Typography , Box } from "@mui/material";

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
import { useParams } from 'react-router-dom';

export const CompraPage = ()=>{

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { setLoggedIn, dataUser } = useContext(AuthContext);
    const [compras,setCompra] = useState([{}])

    const {id} = useParams()

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const getCompra = async() => {
        try {
            const { data } = await axios.get('http://localhost:3000/compra/getCompras')
            setCompra(data.compras)
            console.log(data.compra)
        } catch (err) {
            console.log(err)
        }
    }

    const compra = async() => {
        try {
            let compra ={
                cantidad: document.getElementById('inputCant').value
            }
            const {data} = await axios.post(`http://localhost:3000/compra/compra/${id}`, compra, {headers: headers})
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    const addThem = async()=>{
        //handleClose()
        compra()
    }

    useEffect(()=>{
        getCompra()
    },[])

    return(
        <>
         <MDBIcon fas icon="cogs fa-4x " />
            <span>  </span><br></br>
            <br></br>
            <div className="left binding color">
                    <MDBIcon fas icon="user-tie fa-4x " />
                    <span>  </span>USER PANEL

                    <div className="left binding color">

                        <br></br>
                        <h3>You can see here all the users stored in our not fictional DB</h3>
                    </div>
                </div>
                <div></div>
                {/*<CompraTable/>*/}
                {/*dataUser.role === "ADMIN" && (*/
            <div>
            <form>
                <h5>Products Values</h5>
                {/*  */}

                
                    <>
                        <MDBCol col='6'>
                            <label htmlFor="inputCant" className="form-label">Cantidad</label>
                            <input type="number"  className="form-control mb-4" id="inputCant" required />
                        </MDBCol>

                    </>
            </form>
            

            <Link to='/panel/product'>
                <span><button className="btn btn-success" onClick={() => addThem()}>Save Changes</button></span>
            </Link>

            <Link to='/panel/product'>
                <span><button className="btn btn-danger" >Cancel</button></span>
            </Link>
            </div>
            /*)*/}
        </>
    )

}