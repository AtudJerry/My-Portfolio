import React from "react";
import {Link } from "react-router-dom"
import Sidebar from "../Sidebar";
import Box  from "@mui/material/Box"
import { Container, Row, Col } from 'react-bootstrap' 
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
 const Contact = () => {

    return (
    <Box className="contactpage" >
        <Box>
        <h1 className="contact-text">Get in touch</h1>
        <h2 className="contactnotes">Currently available for any frontend developer roles.   <br></br> &nbsp; &nbsp;If there is any vaccancy my inbox is always <br></br>  &nbsp; &nbsp;  &nbsp; open and active. 
        My contact details <br></br> &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  are listed below</h2>
        </Box>
       <Container>
        <Row className="row">
                                <h3>Contact Details</h3>
                                <Col md={7}>
                                    <ul type = "none">
                                    <li>Email<IconButton><EmailIcon color="primary"/></IconButton>: atudjerry33@gmail.com</li>
                                    <li>WhatsApp<IconButton>< WhatsAppIcon color="primary"/></IconButton>: 680654678</li>
                                    <li>Phone<IconButton><CallIcon color="primary"/></IconButton>: 680654678</li>
                                    
                                    </ul>
                                </Col>
                            
                                </Row>
       
        </Container>

        
        
    </Box>
    )
 }
 export default Contact