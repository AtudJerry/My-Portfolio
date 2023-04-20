import React from "react";
import {Box, IconButton} from "@mui/material"
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import CallIcon from '@mui/icons-material/Call';


 const Topbar = () => {


    return(
        <Box className = "links">
        
        
            <Link to="/Components/Home">Home </Link>
            <Link to="/Components/Contact">Contact</Link>
        
        
            <Link to="/Components/Skills">Skills</Link>
            <Link to="/Components/About">About</Link>
            <Link to="/Components/Resume">Resume</Link>
            

        
        </Box>

    )
 }
 export default Topbar