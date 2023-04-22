import React from "react";
import { IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PlaceTwoToneIcon from "@mui/icons-material/PlaceTwoTone";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { blue } from "@mui/material/colors";
import Sidebar from "../Sidebar";

import Typewriter from 'typewriter-effect';




const Home = () => {
  return (
    <div>
    
        
      <Box  padding = "3px" mt = "20px" sx={{ display: "flex", justifyContent: "space-between" }}>
       

        <Box mt="90px" >
          <Container fluid className="container">
            <Box
              sx={{
                bgcolor: "transparent",
                // height: "50vh",
                // width: "300px",
                // borderRadius: "30%",
                
              }}
            >
                
              <Typography className="text" variant="h5">
                
                My name is ATUD KONFOR JERRY, <br></br>I come from the North
                West region of Cameroon.<br></br><br></br>Student at National Higher Polytechnic Institute Bamenda<br></br>I am a frontend developer and i work with <Typewriter className="type"
  options={{
    strings: ['JavaScript/Html/css','React'],
    autoStart: true,
    loop: true,
  }}
/>
                <br></br>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1px",
                  }}
                >
                    <Box sx={{fontSize : '100%'}}>
                    
                <a href="https://github.com/AtudJerry">  <GitHubIcon className="icon" />    </a>  
                  
                  </Box>

                   
                <a href="https://instagram.com/atud_jerry33?igshid=ZDdkNTZiNTM=">  <InstagramIcon className="icon" />   </a>  



                
                <a href="/"> <TwitterIcon className="icon" /> </a>
                 
                  

                  <a href="https://www.linkedin.com/in/atud-jerry-013798207"> <LinkedInIcon className="icon" /></a>
                  
                  
                  
                </Box>
              </Typography>
            </Box>
          </Container>
        </Box>

        <Box MT = "1000px" marginX={"150px"}>
          {/* <Paper> */}
          <img
            alt="profile-user"
            width="400px"
            height="400px"
            src={require("../jerry.jpg")}
            style={{ cursor: "pointer", borderRadius: "80%" }}
          />

          {/* </Paper> */}
        </Box>

      </Box>
      <br></br>
<br></br>
    

    </div>
  )

  ;
};
export default Home;
