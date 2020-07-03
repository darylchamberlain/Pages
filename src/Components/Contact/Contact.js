import React from 'react'
import './Contact.css'
import NavBar from '../Body/NavBar/NavBar'
import FormPage from './FormPage'
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

class Contact extends React.Component{
    render(){
        return(
            <div className="Contact"> 
            <NavBar />
            <FormPage />
            </div>
        )
    }
}

export default Contact;