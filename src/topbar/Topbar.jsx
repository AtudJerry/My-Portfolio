import React from "react";
import {Box, IconButton} from "@mui/material"
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import CallIcon from '@mui/icons-material/Call';


 const Topbar = () => {


    return(
        <Box className = "topbar" sx = {{ flexGrow : 1,  display: 'flex',
            justifyContent : "space-between",
            marginLeft: '500px',
            marginRight: '20px',
            marginTop: '20px',
            }}>
        
        
            <Link className="link" to="/Components/Home">Home </Link>
            <Link className="link"  to="/Components/Contact">Contact</Link>
        
        
            <Link className="link"  to="/Components/Skills">Skills</Link>
            <Link className="link" to="/Components/About">About</Link>
            <Link  className="link" to="/Components/Resume">Resume</Link>
            

        
        </Box>

    )
 }
 export default Topbar