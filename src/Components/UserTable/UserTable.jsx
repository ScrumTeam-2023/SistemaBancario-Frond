import { useState, useEffect, useContext } from "react";
import { User } from '../User/User.jsx'
import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react'
import { Modal } from "@mui/base";
import { Typography, Box } from "@mui/material";
import Swal from "sweetalert2";
import { AuthContext } from '../../Index.jsx'
import { Table } from 'react-bootstrap';
import { AddServices } from "../AddServices/AddServices.jsx";
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
    MDBModalHeader,
    MDBModalBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody     
}
    from 'mdb-react-ui-kit';

//Style Modal
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
};

export const UserTable = ({ user, getU }) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
    const { setLoggedIn, dataUser } = useContext(AuthContext);
    //const [user, setUser] = useState([])

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [sortByMovements, setSortByMovements] = useState(null);
    const [showLastFive, setShowLastFive] = useState(false);
    const [lastFiveMovements, setLastFiveMovements] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleShowLastFiveMovements = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:3000/user/movements/${userId}`, { headers });
            const { transactions } = response.data;
            setLastFiveMovements(transactions);
            setShowModal(true);
            setSelectedUser(userId);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    const deleteUser = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    const { data } = axios.delete(`http://localhost:3000/user/delete/${id}`, { headers: headers })
                    Swal.fire(
                        'Deleted!',
                        'Your User has been deleted forever!.',
                        'success'
                    )
                    getU()
                }
            })

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => { getU(); getU(sortByMovements); }, [sortByMovements]);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <MDBBtn className="btn" color="primary" onClick={() => setSortByMovements('asc')}>
                    Sort Ascending
                </MDBBtn>
                <span style={{ margin: '0 10px' }}></span>
                <MDBBtn className="btn" color="primary" onClick={() => setSortByMovements('desc')}>
                    Sort Descending
                </MDBBtn>
            </div>
            <table className="table table-danger table-hover table-responsive-sm">
                <thead className="thead-dark">
                    <tr style={{ width: '100px' }}>
                        <th></th>
                        <th><h5>Name</h5></th>
                        <th>Surname</th>
                        <th>Username</th>
                        <th>DPI</th>
                        <th>AccNo</th>
                        <th>Location</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Income</th>
                        <th>balance</th>
                        <th>Movements</th>
                        <th>Role</th>
                        <th><h2>Options</h2></th>
                    </tr>
                </thead>
                <tbody>
                    {user.length > 0 ? (
                        user.map(({ _id, name, surname, username, DPI, AccNo, location, phone, email, jobSite, ingresos, balance, movements, role }, index) => (
                            <tr key={index}>
                                <td>
                                    <h1><MDBIcon fas icon="user-circle fa-1x" /></h1>
                                </td>
                                <User
                                    name={name}
                                    surname={surname}
                                    username={username}
                                    DPI={DPI}
                                    AccNo={AccNo}
                                    location={location}
                                    phone={phone}
                                    email={email}
                                    jobSite={jobSite}
                                    ingresos={ingresos + ' $USD'}
                                    balance={balance + ' $USD'}
                                    movements={movements}
                                    role={role}
                                />
                                <td>
                                    <MDBBtn className="btn" color="danger" onClick={() => deleteUser(_id)}>DELETE</MDBBtn>
                                    <span>     </span>
                                    <Link to={`update/${_id}`}>
                                        <MDBBtn className="btn" color="warning">UPDATE</MDBBtn>
                                    </Link>
                                    <MDBBtn className="btn" color="info" onClick={() => handleShowLastFiveMovements(_id)}>
                                        Movements
                                    </MDBBtn>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <h1></h1>
                    )}
                </tbody>
            </table>

            <MDBModal show={showModal} onHide={handleCloseModal} centered>
             <MDBModalHeader closeButton style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                Last 5 Movements
            </MDBModalHeader>
            <MDBModalBody style={{ backgroundColor: '#c0c0c0', color: '#000000' }}>
                <MDBTable hover style={{ backgroundColor: '#ffffff' }}>
                <MDBTableHead className="table-dark">
                    <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody className="custom-modal-body">
                    {lastFiveMovements.slice(0, 5).map((movement, index) => {
                    let type;
                    if (movement.deposit) {
                        type = 'Deposit';
                    } else if (movement.transfer) {
                        type = 'Transfer';
                    } else if (movement.purchase) {
                        type = 'Purchase';
                    } else if (movement.sale) {
                        type = 'Compra';
                    }
                    return (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{movement.date}</td>
                        <td>{movement.type}</td>
                        <td>
                            {movement.type === 'Compras' ? movement.totalPrice : movement.amount}
                        </td>
                        </tr>
                    );
                    })}
                </MDBTableBody>
                </MDBTable>
            </MDBModalBody>
            </MDBModal>

        </>
    )
}
