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



const Home = () => {
  return (
    <div>
      
        
      <Box  padding = "3px" mt = "90px" sx={{ display: "flex", justifyContent: "space-between" }}>
       

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
                West region of Cameroon.<br></br><br></br>Student at National Higher Polytechnic Institute Bamenda
                <br></br>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1px",
                  }}
                >
                    <Box sx={{fontSize : '50%'}}>
                    <IconButton  size = "large" color = "info">
                  <GitHubIcon className="icon" />
                  </IconButton>
                  </Box>

                   <IconButton  size = "large" color = "info">
                  <InstagramIcon className="icon" />
                  </IconButton>

                  <IconButton size = "large" color = "info">
                  <TwitterIcon className="icon" />
                  </IconButton>

                  <IconButton  size = "large" color = "primary">
                  <LinkedInIcon className="icon" />
                  </IconButton>
                  
                </Box>
              </Typography>
            </Box>
          </Container>
        </Box>

        <Box marginX={"150px"}>
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
      <div className="footer">
      <p>@copyright</p>


      </div>

    </div>
  )

  ;
};
export default Home;
