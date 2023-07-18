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
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </span>
              <span>  </span>
            <span className="text">User</span>
          </button>
        </Link>
      </li>
      )}

    {(dataUser.role === "ADMIN" || dataUser.role === "CLIENT") && (
      <li>
        <Link to="services">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z"/></svg>              </span>
              <span>  </span>
            <span className="text">Services</span>
          </button>
        </Link>
      </li>
    )}

      {dataUser.role === "CLIENT" && (
      <li>
        <Link to="transfer">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"> <path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>
              </span>
              <span>  </span>
            <span className="text">transfer</span>
          </button>
        </Link>
      </li>
      )}

      {dataUser.role === "ADMIN" && (
      <li>
        <Link to="Deposit">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z"/></svg>
              </span>
              <span>  </span>
            <span className="text">DEPOSIT</span>
          </button>
        </Link>
      </li>
      )}

      {(dataUser.role === "ADMIN" || dataUser.role === "CLIENT") && (
      <li>
        <Link to="product">
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>

          <span>  </span>
            <span className="text">Product</span>
            
          </button>
        </Link>
      </li>
      )}

    {dataUser.role === "CLIENT" && (
      <li>
        <Link to="favorite">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          </span>
            <span className="text">Favorite</span>
          </button>
        </Link>
      </li>
      )}
      
          {dataUser.role === "ADMIN" && (
      <li>
        <Link to="compra">
          <button>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C46.3 0 32 14.3 32 32V96c0 17.7 14.3 32 32 32h80v32H87c-31.6 0-58.5 23.1-63.3 54.4L1.1 364.1C.4 368.8 0 373.6 0 378.4V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V378.4c0-4.8-.4-9.6-1.1-14.4L488.2 214.4C483.5 183.1 456.6 160 425 160H208V128h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H64zM96 48H256c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16zM64 432c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm48-168a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm120-24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM160 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM328 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM256 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM424 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM352 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48z"/></svg>              </span>
              <span>  </span>
          <span>  </span>
            <span className="text">Compras</span>
            
          </button>
        </Link>
      </li>
    )}


    {dataUser.role === "ADMIN" && (
            <li>
            <Link to="graficas">
              <button>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                  </span>
                  <span>  </span>
                <span className="text">Activities</span>
              </button>
            </Link>
          </li>
      )}
    </ul>
    <ul className="side-menu bottom">
    
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

