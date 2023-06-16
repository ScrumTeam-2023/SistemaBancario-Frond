import { useState, useEffect , useContext} from "react";
import { User } from '../User/User.jsx'
import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react'
import { Modal } from "@mui/base";
import { Typography , Box } from "@mui/material";
import Swal from "sweetalert2";
import { AuthContext } from '../../Index.jsx'

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


export const UserTable = () => {
                                        
{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
      const { setLoggedIn, dataUser } = useContext(AuthContext);
      const [user, setUser] = useState([])
    
    

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
                                        
{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

      const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        
        const getUsers = async()=>{
            try {
                const { data } = await axios.get('http://localhost:3000/user/getUsers',{headers: headers})
                
                setUser(data.getUsers)
                console.log(data)
            } catch (err) {
                console.log
                
            }
        }

        const deleteUser = async(id)=>{
           try {
            let confirmDeletion = confirm('Are you sure you want to delete it??')
            if(confirmDeletion){
                const { data } = await axios.delete(`http://localhost:3000/user/delete/${id}`,{headers:headers})
                getUsers()
            
            }
           } catch (err) {
            console.error(err)
           }

        }

        useEffect(()=>{getUsers();},[]);
                                                
{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}
  return (
    <>
        <table className="table table-danger table-hover table-responsive-sm">
            <thead className="thead-dark">
            <tr>
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
                    {
                        user.length > 0 ? (

                            user.map(({_id,name,surname,username,DPI,AccNo,location,phone,email,jobSite,ingresos,balance,movement,role},index)=>{

                                return(
                                    
                                    <tr item key={index}>
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
                                            movement={movement}
                                            role={role}
                                            
                                        >
                                        </User>
                                        <td><MDBBtn className="btn" color="danger" onClick={()=>deleteUser(_id)}>DELETE</MDBBtn>
                                        <span>     </span>
                                            {/* espacio entre boton */}
                                        <Link to={`update/${_id}`}>
                                             <MDBBtn className="btn" color="warning">UPDATE</MDBBtn>
                                        </Link>
                                        </td>
                                        
{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}
                                                    

{/* //////////////////////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// //// */}

                                        
                                       
                                        
                                    </tr>
                                )
                            })

                        ):(<h1></h1>)

                    }

                
            </tbody>
        </table>
    </>
  )
}
