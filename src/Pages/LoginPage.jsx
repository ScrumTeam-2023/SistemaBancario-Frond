import React from 'react'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Index'
import axios from 'axios'
import logo from '../Assets/LogoTemp.png'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox

    
  }
  from 'mdb-react-ui-kit';

export const LoginPage = () => {

    const handleChange = (e)=>{
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }

    

      
  return (
    <>
    <br></br>
    <span> </span>
    <br></br>
    <br></br>
    <br></br>
    <MDBContainer fluid className="my-5">
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Log in</h2>
              <p className="mb-3 text-center">Please enter your Credentials 
              to log in</p>
              
              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='lg' color='danger'>
                Login
              </MDBBtn>

              <hr className="my-4" />

              Welcome to 
             <MDBContainer fluid >
                <img src={logo} class="img-thumbnail"/>
             </MDBContainer>
             Powered by Bad-Request-400 staff team...
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>


    </MDBContainer>


    </>
    
  )
}
