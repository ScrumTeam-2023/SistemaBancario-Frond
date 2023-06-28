import React, { useState , useEffect }  from 'react'
import Swal from 'sweetalert2'
import { UserTable } from '../Components/UserTable/UserTable.jsx'
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

export const UserPage = () => {

                                        
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

      
    const [user,setUser] = useState([])

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
                                            
{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

            const getUsers = async()=>{
            try {
                const { data } = await axios.get('http://localhost:3000/user/getUsers',{headers: headers})
                if(data.user){
                    setUser(data.user)
                    console.log(data.user)
                }
            } catch (err) {
                console.log(err)
                
            }
        }




       const addUser = async()=>{
            try {
                let user = {
                    name: document.getElementById('inputName').value,
                    surname: document.getElementById('inputSurname').value,
                    username: document.getElementById('inputUser').value,
                    password: document.getElementById('inputPass').value,
                    DPI: document.getElementById('inputDpi').value,
                    location: document.getElementById('inputLocat').value,
                    phone: document.getElementById('inputPhone').value,
                    email: document.getElementById('inputEmail').value,
                    jobSite: document.getElementById('inputJS').value,
                    ingresos: document.getElementById('inputIn').value,
                    balance: document.getElementById('inputBal').value
                }
                const { data } = await axios.post(`http://localhost:3000/user/save`,user,{headers:headers})
                console.log(data)
                getUsers()
                if (data){
                    Swal.fire({
                        icon:'success',
                        title: " $$$!",
                        text: `User Added succesfully! \n ` +
                        '\n Refresh to see your new client!'
                        ,
                        
                        timer: 4000
                        
                    })
                    getUsers();


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
            addUser()
            getUsers()
       }

    
    useEffect(() => {
        getUsers();
      },[]);
  return (
    <>
       <div>    
            <br></br>
            <div className="left binding color">
            <MDBIcon fas icon="user-tie fa-4x "/>
                  <span>  </span>USER PANEL
                <div className="left binding color">
                    <br></br>
                <h3>You can see here all the users stored in our not fictional DB</h3>
                </div>
            </div>
            <MDBBtn className="mb-4 px-5" color='danger' size='lg' onClick={handleOpen}> Add User</MDBBtn>
            <br></br>
            <UserTable/>


                                        
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
                        <MDBIcon fas icon="plus fa-4x " />
                        <span>  </span><br></br>
                        <h1>Add One User</h1>

                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <h4>Fill the Labels to add One User</h4>
                                <br></br>
                                <form>
                                <h5>Personal Values</h5>
                                             {/*  */}                                   
                                        <MDBRow>
                                        <MDBCol col='6'>
                                        <label htmlFor="inputName" className="form-label">Name </label> 
                                        <input type="text" className="form-control mb-4" id="inputName" label='Name' required  />
                                        </MDBCol>

                                        <MDBCol col='6'>
                                        <label htmlFor="inputSurname" className="form-label">surname </label> 
                                        <input type="text" className="form-control mb-4" id="inputSurname" label='Surname' required  />
                                        </MDBCol>

                                        <MDBCol col='6'>
                                        <label htmlFor="inputUser" className="form-label">User </label> 
                                        <input type="text" className="form-control mb-4" id="inputUser" label='User' required  />
                                        </MDBCol>



                                            {/*  */}
                                            {/*  */}
                                        <MDBCol col='6'>
                                        <label htmlFor="inputPass" className="form-label">Password </label> 
                                        <input type="text" className="form-control mb-4" id="inputPass" label='Password' required  />
                                        </MDBCol>
                                            {/*  */}



                                            {/*  */}
                                            <h5>Specific Values</h5>
                                        </MDBRow>

                                        <MDBCol col='6'>
                                        <label htmlFor="inputEmail" className="form-label">Email </label> 
                                        <input type="text" className="form-control mb-4" id="inputEmail" required  />
                                        </MDBCol>

                                        <MDBRow>
                                        <MDBCol col='6'>
                                        <label htmlFor="inputDpi" className="form-label">DPI </label> 
                                        <input type="text" className="form-control mb-4" id="inputDpi" required  />
                                        </MDBCol>

                                        <MDBCol col='6'>
                                        <label htmlFor="inputPhone" className="form-label">Phone </label> 
                                        <input type="text" className="form-control mb-4" id="inputPhone" required  />
                                        </MDBCol>

                                       
                                        

                                        </MDBRow>
                                        <h5>Site or Job</h5>

                                             {/*  */}  
                                        <MDBRow>

                                        <MDBCol col='6'>
                                        <label htmlFor="inputJS" className="form-label">Job Name</label> 
                                        <input type="text" className="form-control mb-4" id="inputJS" required  />
                                        </MDBCol>
                                        <MDBCol col='6'>
                                        <label htmlFor="inputLocat" className="form-label">Location </label> 
                                        <input type="text" className="form-control mb-4" id="inputLocat" required  />
                                        </MDBCol>

                                        </MDBRow>

                                        <MDBRow>
                                             <h6>REMINDER: The income must be Above 100$</h6>
                                            <MDBCol col='6'>
                                            <label htmlFor="inputIn" className="form-label">Income</label> 
                                            <input type="text" className="form-control mb-4" id="inputIn" required  />
                                            </MDBCol>
                                            <MDBCol col='6'>
                                            <label htmlFor="inputBal" className="form-label">Balance</label> 
                                            <input type="text" className="form-control mb-4" id="inputBal" required  />
                                            </MDBCol>
                                        </MDBRow>

                                

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
