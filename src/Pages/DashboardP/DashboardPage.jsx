import React, { useState, useContext } from 'react'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Index'
import Swal from 'sweetalert2'
import { Outlet, Link } from 'react-router-dom'
import logo from '../DashboardP/panel.png'


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
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem
}

from 'mdb-react-ui-kit';

export const DashboardPage = () =>{

 //*---------------------------------LOGICA---------------------------------------------
        const { setLoggedIn, dataUser } = useContext(AuthContext);
        const navigate = useNavigate();

        const [isAdmin, setIsAdmin] = useState(true)

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

       return(
        <>
            <div id="body">
  <section id="sidebar">
    <a className="brand ms-3">
        
    <div className='d-flex flex-row mt-1'>
          {/* <MDBIcon fas icon="piggy-bank fa-3x me-3" style={{ color: '#ffffff' }}/> */}
          <MDBContainer fluid >
                <img src={logo} className="img-fluid rounded"/>
             </MDBContainer>
          </div>

    </a>
    <ul className="side-menu top">
      <li className="active">
        <button>
          <span className="text">Main Panel</span>
        </button>
      </li>

      {dataUser.role === "ADMIN" && (
        <li>
        <Link to="user">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
              </span>
              <span>  </span>
            <span className="text">User</span>
          </button>
        </Link>
      </li>
      )}

      <li>
        <Link to="services">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
              </span>
              <span>  </span>
            <span className="text">Services</span>
          </button>
        </Link>
      </li>

      <li>
        <Link to="transfer">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
              </span>
              <span>  </span>
            <span className="text">transfer</span>
          </button>
        </Link>
      </li>

      <li>
        <Link to="Deposit">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
              </span>
              <span>  </span>
            <span className="text">DEPOSIT</span>
          </button>
        </Link>
      </li>


      <li>
        <Link to="product">
          <button>

          <i class="fas fa-bed"></i>
          <span>  </span>
            <span className="text">Product</span>
            
          </button>
        </Link>
      </li>
   

    </ul>
    <ul className="side-menu bottom">
      {/* <li>
          <MDBCard>
            <MDBCardHeader style={{color:'#000'}}>Welcome:</MDBCardHeader>
            <MDBListGroup flush>
              <MDBListGroupItem>Name: {dataUser.username}</MDBListGroupItem>
              <MDBListGroupItem>Role: {dataUser.role} </MDBListGroupItem>
              <MDBListGroupItem>No: {dataUser.AccNo}</MDBListGroupItem>
      
            </MDBListGroup>
   
        </MDBCard>

      </li> */}
        <br></br>
      <li>
       <Link to='profile'>
        <button>
      
        <span>
        <MDBIcon fas icon="user-alt" />
              </span>
              <span>  </span>
          <span className='text'>Profile</span>
     
       
        </button>
        </Link>

      </li>
      <li>
        <button onClick={logOut}>
        <span>
           
           </span>
           <MDBIcon fas icon="sign-out-alt" />
           <span>  </span>
  
          <span className="text">LogOut</span>
        </button>
      </li>
    </ul>
  </section>
  <section id="content">
    <nav>
      <a></a>
    </nav>
    <Outlet></Outlet>
  </section>
</div>

        </>
       )

}

