import React from 'react'
import './Contact.css'
import NavBar from '../Body/NavBar/NavBar'
import FormPage from './FormPage'

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