import { useState, useEffect, useContext } from "react";
import { AddServices } from "../AddServices/AddServices";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import { Modal } from "@mui/base";
import { Typography, Box } from "@mui/material";
import { AuthContext } from "../../Index";
import jsPDF from "jspdf";
import "./modal.css";

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
} from "mdb-react-ui-kit";

export const AddServicesTable = ({ service, getService }) => {
    const { setLoggedIn, dataUser } = useContext(AuthContext);
  
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };
  
    const headers = {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    };
  
    const [showInvoice, setShowInvoice] = useState(false);
    const [invoiceData, setInvoiceData] = useState(null);

    const deleteService = async (id) => {
      try {
        let confirmDelete = confirm("Are you sure to delete this Service?");
        if (confirmDelete) {
          const { data } = await axios.delete(
            `http://localhost:3000/addServices/delete/${id}`,
            { headers: headers }
          );
          getService();
        }
      } catch (err) {
        console.error(err);
      }
    };
  
     const buyService = async (id) => {
    try {
        const { data } = await axios.post(
        `http://localhost:3000/addServices/acquire/${id}`,
        {},
        { headers: headers }
        );
        if (data.message) {
        setShowInvoice(true);
        setInvoiceData(data.purchaseData);
        }
    } catch (err) {
        console.error(err);
    }
    };

  
    const handleClose = () => {
      setShowInvoice(false);
    };
  
    const generateInvoice = () => {
      if (invoiceData) {
        const doc = new jsPDF();
        doc.setFontSize(12);
        doc.text(`Invoice for Service: ${invoiceData.serviceName}`, 20, 20);
        doc.text(`Price: ${invoiceData.servicePrice}`, 20, 30);
        doc.text(`User: ${invoiceData.userName}`, 20, 40);
        doc.text(`Balance: ${invoiceData.userBalance}`, 20, 50);
        doc.text(`Date: ${invoiceData.date}`, 20, 60);
        doc.save("invoice.pdf");
      }
    };

  useEffect(() => {
    const handleBuyService = async () => {
      if (showInvoice) {
        const { data } = await axios.post(
          `http://localhost:3000/addServices/acquire/${invoiceData.serviceId}`,
          {},
          { headers: headers }
        );
        if (data.message) {
          setInvoiceData(data.purchaseData);
          setShowInvoice(true);
        }
      }
    };

    handleBuyService();
  }, [showInvoice]);
  
  return (
    <>
      <table className="table table-danger table-hover table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th> </th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Historial</th>
            <th>
              <h2>Options</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {service?.map(({ _id, name, description, price, historial }, index) => {
            return (
              <tr key={index}>
                <td><h1><i class="fa-solid fa-phone-volume"></i></h1></td>     
                <AddServices
                  name={name}
                  description={description}
                  price={price}
                  historial={historial}
                ></AddServices>
                <div>
                {dataUser.role === "CLIENT" && (
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        buyService(_id);
                        setShowInvoice(true);
                      }}
                    >
                      Comprar
                    </button>
                  </td>
                )}
                  {dataUser.role === "ADMIN" && (
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteService(_id)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
            {/* FACTURA MODAL */}
      <Modal
        open={showInvoice}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Compra Sucessfully
            
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            <div>
              <h4>Bill details:</h4>
              {invoiceData && (
                <ul>
                  <li>
                    <strong>Service ID:</strong> {invoiceData.serviceId}
                  </li>
                  <li>
                    <strong>Service Name:</strong> {invoiceData.serviceName}
                  </li>
                  <li>
                    <strong>Service Price:</strong> {invoiceData.servicePrice}
                  </li>
                 
                  <li>
                    <strong>Date:</strong> {invoiceData.date}
                  </li>
                </ul>
              )}
            </div>
            <div className="button-container">
              <button className="btn btn-danger" onClick={handleClose}>
                Close
              </button>
              <button
                className="btn btn-primary download-button"
                onClick={generateInvoice}
              >
                Download Invoice
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>

    </>
  );
};
