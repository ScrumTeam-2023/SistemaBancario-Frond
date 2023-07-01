import React, { useState , useEffect }  from 'react'
import Swal from 'sweetalert2'
import { ProductTable } from '../Components/ProductTable/ProductTable';
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
  }from 'mdb-react-ui-kit';

export const ProductPage = () =>{
   
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [product,setProduct] = useState([{}])
    const [user, setUser] = useState([])
    //const {id} = useParams()

    const getProduct = async () => {
        try {
            const {data} = await axios.get('http://localhost:3000/product/getProducts')
            setProduct(data)
        } catch (err) {
            console.log
        }
    }

    const addProduct = async()=>{
        try {
            let product = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                price: document.getElementById('inputPrice').value,
                stock: document.getElementById('inputStock').value,
            }
            const {data} = await axios.post(`http://localhost:3000/product/createProduct`,product)
            console.log(data)
            getProduct()
            if(data){
                Swal.fire({
                    icon:'success',
                    title: " $$$!",
                    text: `Product Added succesfully! \n ` +
                    '\n Refresh to see your new client!',
                    timer: 4000
                    
                })
            }
            getProduct()
        } catch (err) {
            console.log(err)
            Swal.fire({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error'
            })
        }
    }

    const addThem = async()=>{
        handleClose()
        addProduct()
        getProduct()
    }

    useEffect(() => {
        getProduct()
    }, [])

    return(
        <>
       <div>
            <div className="left binding color">
            <MDBIcon fas icon="user-tie fa-4x "/>
                  <span>  </span>PRODUCTS PANEL
                <div className="left binding color">
                    <br></br>
                <h3>algo sobre productos xd</h3>
                </div>
            </div>
            <MDBBtn className="mb-4 px-5" color='danger' size='lg' onClick={handleOpen}> Add Product</MDBBtn>
            <br></br>
            <ProductTable/>

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
                        <h1>Add One Product</h1>

                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <h4>Fill the Labels to add One Product</h4>
                                <br></br>
                                <form>
                                             {/*  */}  
                                        <tr>                                 
                                        <label htmlFor="inputName" className="form-label">Name </label> 
                                        <input type="text" className="form-control mb-4" id="inputName" label='Name' required  />
                                        </tr>
                                        <tr>
                                        <label htmlFor="inputDescription" className="form-label">Description </label> 
                                        <input type="text" className="form-control mb-4" id="inputDescription" label='Description' required  />
                                        </tr>
                                        <tr>
                                        <label htmlFor="inputPrice" className="form-label">Price </label> 
                                        <input type="Number" className="form-control mb-4" id="inputPrice" label='Price' required  />
                                        </tr>
                                        <tr>
                                        <label htmlFor="inputStock" className="form-label">Stock </label> 
                                        <input type="Number" className="form-control mb-4" id="inputStock" label='Stock' required  />
                                        </tr>
                                        
                                </form>
                       <span><button className="btn btn-success" onClick={()=> addThem()}>Add New Product</button></span>
                                    <span>      </span>
                        <span><button className="btn btn-danger" onClick={handleClose}>Cancel</button></span>
                    </Typography>
                    </Box>
            </Modal>
            
        </div>
        
    </>

    )
}


