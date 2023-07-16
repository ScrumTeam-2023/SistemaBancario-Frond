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
  }from 'mdb-react-ui-kit';

export const ProductUpdate = () => {
    const [product, setProduct] = useState([{}])
    const { setLoggedIn, dataUser } = useContext(AuthContext);
    const {id} = useParams()
    
    const getSingleProduct = async() =>{
        try {
            const {data} = await axios.get(`https://localhost:3000/product/getProduct/${id}`)
            setProduct(data.product)
        } catch (err) {
            console.log(err)
        }
    }

    const updateProduct = async()=>{
        try {
            let upProduct ={
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescri').value,
                price: document.getElementById('inputPrice').value,
                stock: document.getElementById('inputStock').value,
            }
            const {data} = await axios.put(`http://localhost:3000/product/updatePrduct/${id}`, upProduct)
            console.log('hola nuevo dato',data, upProduct)
            if(data.message){
                Swal.fire({

                    title: 'User updated Succesfully',
                    text: 'This user is now Updatedd',
                    icon: 'success',
                    timer: 5000,
                    showCloseButton: false

            })
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getSingleProduct()
    }, [])
    return(
        <>
         <MDBIcon fas icon="cogs fa-4x " />
            <span>  </span><br></br>
            <h1>Edit {product.name} Products</h1>
            <br></br>
            <form>
                <h5>Products Values</h5>
                {/*  */}

                {/*dataUser.role === "ADMIN" && (*/
                    <>
                        <MDBCol col='6'>
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" defaultValue={product.name} className="form-control mb-4" id="inputName" required />
                        </MDBCol>

                        <MDBRow>
                            <MDBCol col='6'>
                                <label htmlFor="inputDescri" className="form-label">Description </label>
                                <input type="text" defaultValue={product.description} className="form-control mb-4" id="inputDescri" required />
                            </MDBCol>
                        </MDBRow>
                        
                        <MDBRow>
                            <MDBCol col='6'>
                                <label htmlFor="inputPrice" className="form-label">Price</label>
                                <input type="Number" defaultValue={product.price} className="form-control mb-4" id="inputPrice" required />
                            </MDBCol>
                            <MDBCol col='6'>
                                <label htmlFor="inputStock" className="form-label">Stock </label>
                                <input type="Number" defaultValue={product.stock} className="form-control mb-4" id="inputStock" required />
                            </MDBCol>

                        </MDBRow>
                    </>
                /*)*/}
            </form>


            <Link to='/panel/product'>
                <span><button className="btn btn-success" onClick={() => updateProduct()}>Save Changes</button></span>
            </Link>

            <Link to='/panel/product'>
                <span><button className="btn btn-danger" >Cancel</button></span>
            </Link>

        </>
    )
}