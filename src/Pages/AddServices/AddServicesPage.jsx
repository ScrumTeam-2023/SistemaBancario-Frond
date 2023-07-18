import axios from "axios";
import React, { useState, useEffect, useContext } from 'react';
import { AddServicesTable } from "../../Components/AddServicesTable/AddServiceTable";
import Swal from 'sweetalert2'
import { Modal } from "@mui/base";
import { Typography, Box } from "@mui/material";
import { AuthContext } from "../../Index";
import jsPDF from 'jspdf'; // Importar jsPDF para generar el PDF

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

export const AddServicesPage = () => {
    const [service, setService] = useState([{}]);
    const { setLoggedIn, dataUser } = useContext(AuthContext);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const getService = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/addServices/get', { headers: headers });
            if (data.service) {
                setService(data.service);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const addService = async () => {
        try {
            let service = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                price: document.getElementById('inputPrice').value,
                historial: document.getElementById('inputHistorial').value,
            };

            const { data } = await axios.post(`http://localhost:3000/addServices/add`, service, { headers: headers });
            if (data.message) {
                getService();
                Swal.fire({
                    icon: 'success',
                    title: "Lets give Em The Best",
                    text: 'Service Added succesfully!',
                    timer: 4000,
                    showDenyButton: false
                });
            }
        } catch (err) {
            Swal.fire({
                title: 'Oops...',
                text: err.response.data.message,
                icon: 'error'
            });
            console.log(err);
        }
    };

    const addThem = async () => {
        handleClose();
        addService();
        getService();
    };

    const generateInvoice = () => {
        const doc = new jsPDF();
        doc.setFontSize(12);
        doc.text(`Invoice for Service: ${service.name}`, 20, 20);
        doc.text(`Price: $${service.price}`, 20, 30);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 40);
        doc.save('invoice.pdf');
    };

    useEffect(() => {
        getService();
    }, []);

    return (
        <div>
            <div className="left binding color">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
                | ADD SERVICE PAGE
                <div className="left binding color">
                    <br />
                    <h3>See the services!</h3>
                </div>
            </div>
            {dataUser.role === "ADMIN" && (
                <button className="btn btn-warning" onClick={handleOpen}>ADD SERVICES</button>
            )}
            <br />
            <AddServicesTable service={service} getService={getService} />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant='h6' component="h2">
                        Add New SERVICE
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <h4>Please fill all fields To Add a Service</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="inputName" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputDescription" className="form-label">Description</label>
                                <input type="text" className="form-control" id="inputDescription" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPrice" className="form-label">Price</label>
                                <input type="text" className="form-control" id="inputPrice" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputHistorial" className="form-label">Historial</label>
                                <input type="text" className="form-control" id="inputHistorial" required />
                            </div>
                        </form>
                        <span>
                            <button className="btn btn-success" onClick={() => addThem()}>Add New Service</button>
                        </span>
                        <span> </span>
                        <span>
                            <button className="btn btn-danger" onClick={handleClose}>Cancel</button>
                        </span>
                    </Typography>
                </Box>
            </Modal>

            {service && service.name && (
                <div>
                    <h3>Invoice for Service: {service.name}</h3>
                    <p>Price: ${service.price}</p>
                    <button className="btn btn-primary" onClick={generateInvoice}>Download Invoice</button>
                </div>
            )}
        </div>
    );
};