
import { useEffect,useState,useContext } from 'react'
import { Link , useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import { AuthContext } from '../Index';
import axios from 'axios';

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


export const UserUpdate = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams();
    const { setLoggedIn, dataUser } = useContext(AuthContext);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }


    const getSingleUser = async()=>{
        try {
         const { data } = await axios.get(`http://localhost:3000/user/getOne/${id}`)
         setUser(data.findUser)  
        } catch (err) {
         console.warn(err)
         
        }
     }

     const editUser = async()=>{
         try {
             let upUser = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value,
                username: document.getElementById('inputUser').value,
                location: document.getElementById('inputLocat').value,
                phone: document.getElementById('inputPhone').value,
                email: document.getElementById('inputEmail').value,
                jobSite: document.getElementById('inputJS').value,
                ingresos: document.getElementById('inputIn').value,
                balance: document.getElementById('inputBal').value
             }

             const { data } = await axios.put(`http://localhost:3000/user/editUser/${id}`,upUser,{headers:headers})
             console.log(data.message)
         } catch (err) {
             
         }

     }

     useEffect(() => {
        getSingleUser();
      },[]);
                return (
                <>
                                                    <MDBIcon fas icon="cogs fa-4x " />
                                                     <span>  </span><br></br>
                                                     <h1>Edit {user.name + '`s'} Profile</h1>
                                                                <br></br>
                                                                <form>
                                                    <h5>Personal Values</h5>
                                                            {/*  */}        
                                                                                  
                                                        <MDBRow>
                                                        <MDBCol col='6'>
                                                        <label htmlFor="inputName" className="form-label">Name </label> 
                                                        <input type="text" defaultValue={user.name} className="form-control mb-4" id="inputName" label='Name' required  />
                                                        </MDBCol>

                                                        <MDBCol col='6'>
                                                        <label htmlFor="inputSurname" className="form-label">surname </label> 
                                                        <input type="text" defaultValue={user.surname} className="form-control mb-4" id="inputSurname" label='Surname' required  />
                                                        </MDBCol>

                                                        <MDBCol col='6'>
                                                        <label htmlFor="inputUser" className="form-label">User </label> 
                                                        <input type="text" defaultValue={user.username} className="form-control mb-4" id="inputUser" label='User' required  />
                                                        </MDBCol>


                                                       
                                                        </MDBRow>

                                                        {dataUser.role === "ADMIN" && (
                                                            <>
                                                                <MDBCol col='6'>
                                                        <label htmlFor="inputEmail" className="form-label">Email </label> 
                                                        <input type="text" defaultValue={user.email} className="form-control mb-4" id="inputEmail" required  />
                                                        </MDBCol>

                                                        <MDBRow>
                                                        <MDBCol col='6'>
                                                        <label htmlFor="inputPhone" className="form-label">Phone </label> 
                                                        <input type="text" defaultValue={user.phone} className="form-control mb-4" id="inputPhone" required  />
                                                        </MDBCol>

                                                    
                                                        

                                                        </MDBRow>
                                                        <h5>Site or Job</h5>
                                                        <MDBRow>

                                                        <MDBCol col='6'>
                                                        <label htmlFor="inputJS" className="form-label">Job Name</label> 
                                                        <input type="text" defaultValue={user.jobSite} className="form-control mb-4" id="inputJS" required  />
                                                        </MDBCol>
                                                        <MDBCol col='6'>
                                                        <label htmlFor="inputLocat" className="form-label">Location </label> 
                                                        <input type="text" defaultValue={user.location} className="form-control mb-4" id="inputLocat" required  />
                                                        </MDBCol>

                                                        </MDBRow>

                                                        <MDBRow>
                                                            <h6>REMINDER: The income must be Above 100$</h6>
                                                            <MDBCol col='6'>
                                                            <label htmlFor="inputIn" className="form-label">Income</label> 
                                                            <input type="text" defaultValue={user.ingresos} className="form-control mb-4" id="inputIn" required  />
                                                            </MDBCol>
                                                            <MDBCol col='6'>
                                                            <label htmlFor="inputBal" className="form-label">Balance</label> 
                                                            <input type="text" defaultValue={user.balance} className="form-control mb-4" id="inputBal" required  />
                                                            </MDBCol>
                                                        </MDBRow>
                                                            </>
                                                               )}
                                                </form>


                                                            <Link to= '/panel/user'>
                                                            <span><button className="btn btn-success" onClick={()=> editUser()}>Save Changes</button></span>
                                                            </Link>
                                                        
                                                            <Link to= '/panel/user'>
                                                            <span><button className="btn btn-danger" >Cancel</button></span>
                                                            </Link>
                                              
                                                               
                                                   


   </>
  )
}
