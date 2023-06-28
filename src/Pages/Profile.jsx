
import { Outlet, Link , useParams} from 'react-router-dom'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Index'
import { useState, useContext , useEffect } from 'react'
import axios from 'axios'


import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  }
  
  from 'mdb-react-ui-kit';


export const Profile = () => {

    const [profile, setProfile] = useState({})
    const { setLoggedIn, dataUser } = useContext(AuthContext);
    const navigate = useNavigate();

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')

      }

    const getProfile = async()=>{
      try {
        const {data} = await axios.get(`http://localhost:3000/user/profile`,{headers:headers})
        if (data.findToken){
          setProfile (data.findToken)
          console.log(data.findToken) //
        }
      } catch (err) {
        console.error(err)
        
      }
    }

    
      useEffect(()=>{getProfile();},[])

  return (
   <>   
          <br></br>
      

        <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
             
              <MDBBreadcrumbItem active className='text'>Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
                <br></br>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">

                <MDBIcon fas icon="user-circle fa-10x"  className="rounded-circle" style={{ width: '150px' }} fluid/>
                <br></br>
                <br></br>

                <p className="text-muted mb-1">I Am the user</p>
                <p className="text-muted mb-1"> Role: <h3> {profile.role} </h3> </p>

                <p className="text-muted mb-1"> Account: <h4>{profile.AccNo}</h4> </p>

                <div className="d-flex justify-content-center mb-2">


                            <div>
                               
                                <Link to={`update/${profile._id}`}>
                                  <button className='btn btn-warning'>
                                  <MDBIcon fas icon="cogs" />
                                  <span>Edit Profile</span>
                                  </button>
                                </Link>
                            </div>



                </div>
              </MDBCardBody>
            </MDBCard>

           
          </MDBCol>
          
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>

                {/* cuerpo */}
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profile.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>


                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Surname</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profile.surname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />


                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Username</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profile.username}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />


               

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profile.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />


                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profile.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>








              </MDBCardBody>
            </MDBCard>

    
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>


    
    {/*  boton */}
    
   </>
  )
}
