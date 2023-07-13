import { useState, useEffect } from "react";
import {AddServices} from "../AddServices/AddServices";
import axios from "axios";
import {Link} from "react-router-dom";
import React from "react";
import {Modal} from "@mui/base";
import {Typography, Box}from "@mui/material";

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

  export const AddServicesTable =({service,getService})=>{
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }

//------------------------------------------------------------
/* const [service, setService] = useState([{}]) */

/* const getService = async()=>{
    try{
        const { data } = await axios.get('http://localhost:3000/addServices/get',{headers: headers})
        setService(data.service)
        console.log('aqui')
    }catch(err){
        console.log
    }
}
useEffect(()=>{getService()},[]) */

const deleteService = async(id)=>{
    try{
        let confirmDelete = confirm('Are you sure to delete this Service?')
        if(confirmDelete){
            const { data } = await axios.delete(`http://localhost:3000/addServices/delete/${id}`,{headers: headers})
            getService()

        }

    }catch(err){
        console.error(err)
    }
}

//Comprar

const buyService = async(id)=>{
    try{
        console.log(headers)
        const {data} = await axios.post(`http://localhost:3000/addServices/acquire/${id}`,{},{headers: headers})
        if(data.message){ alert(data.message)}
        

    }catch(err){
        console.error(err)
    }
}

//-------------------------------------------------------------------

return(
    <>
        <table className="table table-danger table-hover table-responsive-sm">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Historial</th>
                    <th>DPI</th>
                    <th><h2>Options</h2></th>
                </tr>
            </thead>
            <tbody>
                {
                    service?.map(({_id,name,description,price,historial,DPI},index)=>{
                     return(
                        <tr key={index}>
                            <AddServices 
                            
                                name={name}
                                description={description}
                                price={price}
                                historial={historial}
                                DPI={DPI}>
                                
                            </AddServices>

                            <div>
                                {/* */}
                                    {/* ComprarServicio /${_id} */}
                                    
                                    <td><button className="btn btn-warning" onClick={()=> buyService(_id)}>Comprar</button></td>
                                    

                                    {/* */}
                                    {/* Eliminar */}
                                    <td><button className="btn btn-danger" onClick={()=> deleteService(_id)}>Delete</button></td>
                            </div>
                        </tr>
                     )   
                    })
                }
            </tbody>

        </table>
    </>
)

}
