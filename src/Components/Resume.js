import React from "react";
import  Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
 const Resume = () => {

    return (
    <div>
         <Box className="resumepage" >
            <p> click here to download my curriculum vitae <a href = "https://drive.google.com/file/d/1ip_H3EHRxj4n7QL05bvO0eOVYpeRYGR-/view?usp=drivesdk"><Button variant = "contained" borderRadius = "10px"><FileDownloadIcon/></Button> </a></p>
         </Box>
    </div>
    )
 }
 export default Resume