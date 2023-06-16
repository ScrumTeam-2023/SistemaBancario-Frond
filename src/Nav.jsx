
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Index';
import { useContext } from 'react';
import Swal from 'sweetalert2';


export const Nav = () => {

    const { setLoggedIn, dataUser} = useContext(AuthContext)
    const navigate = useNavigate()

    

    const logOut = ()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you Really want to log Out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#7f82ba',
            confirmButtonText: 'Log me Out'
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear()
                setLoggedIn(false)
                navigate('/login')
            }
          })
      }



  return (
    <>
     

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" >BankRequest 400</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

                 <li><Link to="/">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </Link></li>

                <li><Link to="user">
                    <a class="nav-link active" aria-current="page" href="#">User</a>
                </Link></li>

                <li><Link to="/">
                    <a class="nav-link active" aria-current="page" href="#">Movement</a>
                </Link></li>

                <span>                </span>

                <form className='d-flex'>
                <button class="btn btn-sm btn-outline-danger" type="button" onClick={logOut}>Log Out</button>
                </form>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}


{/* <form>
                                        <h5>Personal Values</h5>
                                <MDBRow>
                                     <MDBCol col='6'>
                                     <MDBInput wrapperClass='mb-4' label='First name' id='inputName' required />
                                    </MDBCol>

                                    <MDBCol col='6'>
                                     <MDBInput wrapperClass='mb-4' label='Last name' id='inputSurname' />
                                    </MDBCol>

                                    <MDBCol col='6'>
                                     <MDBInput wrapperClass='mb-4' label='Username' id='inputUser'/>
                                    </MDBCol>
                                </MDBRow>
                                    
                                     <MDBCol col='2'>
                                     <MDBInput wrapperClass='mb-4' label='Password' id='inputPass' />
                                    </MDBCol>

                                <MDBRow>
                                    <MDBCol className='col' >
                                     <MDBInput wrapperClass='mb-4' label='Email' id='inputEmail' />
                                     </MDBCol>

                                </MDBRow>
                                         <h5>Specific Values</h5>
                                <MDBRow>
                                     <MDBCol col='6'>
                                     <MDBInput wrapperClass='mb-4' label='DPI' id='inputDpi' />
                                     </MDBCol>

                                     <MDBCol col='6'>
                                     <MDBInput wrapperClass='mb-4' label='Phone' id='inputPhone' />
                                     </MDBCol>

                                     <MDBCol col='6'>
                                     <MDBInput wrapperClass='mb-4' label='Role' id='inputRol' />
                                     </MDBCol>

                                </MDBRow>
                                        <h5>Site or Job</h5>
                                <MDBRow>
                                    <MDBCol col='6'>
                                     <MDBInput wrapperClass='mb-4' label='Job Site' id='inputJS' />
                                     </MDBCol>

                                     <MDBCol col='6'>
                                     <MDBInput wrapperClass='mb-4' label='Location' id='inputLocat'/>
                                     </MDBCol>

                                </MDBRow>
                                   <h5>Money!</h5>

                                <MDBRow>
                                        <h6>Reminder: It has to own an Income of 100$ or above</h6>
                                     <MDBCol col='6'>
                                     <MDBInput wrapperClass='mb-4' label='Income' id='inputIn'/>
                                     </MDBCol>

                                     <MDBCol col='6'>
                                     <MDBInput wrapperClass='mb-4' label='Balance' id='inputBal'/>
                                     </MDBCol>

                                </MDBRow>

                                

                            </form> */}