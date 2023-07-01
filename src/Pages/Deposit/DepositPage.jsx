import React, { useState , useEffect }  from 'react'
import Swal from 'sweetalert2'
import { DepositTable } from '../../Components/DepositTable/DepositTable';
import axios from "axios";
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
  }
  from 'mdb-react-ui-kit';

export const DepositPage = () => {

                                        
{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}


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

      const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

      
    const [deposit,setDeposit] = useState([])
    const [user, setUser] = useState([])


    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
                                            
{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

const getAllDeposits = async()=>{
    try{
        const {data} = await axios.get('http://localhost:3000/deposit/get')
        setDeposit(data.getAllDeposits)
    }catch(err){
        console.log
    }
}






       const makeDeposit = async()=>{
            try {
                let deposit = {
                    noCuenta: document.getElementById('inputnoCuenta').value,
                    amount: document.getElementById('inputAmount').value,
                }
                const { data } = await axios.post(`http://localhost:3000/deposit/add`,deposit,{headers:headers})
                console.log(data)
                getAllDeposits();   
                if (data.message){
                    Swal.fire({
                        icon:'success',
                        title: " $$$!",
                        text: 'Deposit Added succesfully!',
                        timer: 4000
                        
                    })
                    getAllDeposits();   
                }

            } catch (err) {
                console.error(err);
                Swal.fire({
                    title: 'Error',
                    text: err.response.data.message,
                    icon: 'error'
                })
            }
       }



       const addThem = async()=>{
            handleClose()
            makeDeposit()
            getAllDeposits()
       }

       

    
    useEffect(() => {
        getAllDeposits();
      },[]);
  return (
    <>
       <div>
            <div className="left binding color">
            <MDBIcon fas icon="user-tie fa-4x "/>
                  <span>  </span>Deposit
                <div className="left binding color">
                    <br></br>
                <h3>Deposit</h3>
                </div>
            </div>
            <MDBBtn className="mb-4 px-5" color='danger' size='lg' onClick={handleOpen}> Add Deposit</MDBBtn>
            <br></br>
            <DepositTable/>


                                        
{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

            {/* MODAL */}

            <Modal id="Add"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <MDBIcon fas icon="plus fa-2x " />
                        <span>  </span>Add  Deposit
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <h4>Fill the Labels to add Deposit</h4>
                                <br></br>
                                <form>
                                <h5>Deposit Values</h5>
                                             {/*  */}                                   
                                        <MDBRow/>
                                        <MDBCol col='6'>
                                        <label htmlFor="inputnoCuenta" className="form-label">Destination Account </label> 
                                        <input type="text" className="form-control mb-4" id="inputnoCuenta" label='noCuenta' required  />
                                        </MDBCol>

                                        <MDBCol col='6'>
                                        <label htmlFor="inputAmount" className="form-label">Amount </label> 
                                        <input type="number" className="form-control mb-4" id="inputAmount" label='amount' required  />
                                        </MDBCol>


                                </form>



                            

                       <span><button className="btn btn-success" onClick={()=> addThem()}>Add New User</button></span>
                                    <span>      </span>
                        <span><button className="btn btn-danger" onClick={handleClose}>Cancel</button></span>
                    </Typography>
                    </Box>
            </Modal>
                                        
{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

        </div>

    </>
  )
}
