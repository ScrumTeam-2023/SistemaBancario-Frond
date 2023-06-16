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
  MDBInput
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
        <Link to="temp">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
              </span>
              <span>  </span>
            <span className="text">Temp</span>
          </button>
        </Link>
      </li>

      <li>
        <Link to="temp">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
              </span>
              <span>  </span>
            <span className="text">Temp</span>
          </button>
        </Link>
      </li>

      <li>
        <Link to="temp">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
              </span>
              <span>  </span>
            <span className="text">Temp</span>
          </button>
        </Link>
      </li>


      <li>
        <Link to="LoreIpsum">
          <button>

          <i class="fas fa-bed"></i>
          <span>  </span>
            <span className="text">LoreIpsum</span>
            
          </button>
        </Link>
      </li>
   

   














    </ul>
    <ul className="side-menu bottom">
      <li>
        <button>
          <span className="text">Welcome: {dataUser.username}, {dataUser.role}</span>
        </button>
      </li>
    
      <li>
        <button onClick={logOut}>
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
