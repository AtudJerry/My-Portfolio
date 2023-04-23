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
import EmojiPicker from "emoji-picker-react";

import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div>
      <Box
        className="homebox"
        ml = "10px"
        mt="6px"
        mr = "100px"
        sx={{ padding:"3px", display: "flex",  justifyContent: "space-between" }}
      >
        <Box mt="27px" marginX={"150px"}>
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

        <Box mt="90px">
          <Container fluid className="container">
            <Box
            className = ""
              ml="60px"
              sx={{
                bgcolor: "transparent",
                height: "50vh",
                width: "300px",
                borderRadius: "30%",
              }}
            >
              <h3>
                Hello👋, My name is ATUD KONFOR JERRY, <br></br>I come from the
                North West region of Cameroon.<br></br>
                <br></br>Student at National Higher Polytechnic Institute
                Bamenda<br></br>I am a frontend developer
                <Typewriter
                  className="type"
                  options={{
                    strings: [
                      "I work with React",
                      "I work with JavaScript/Html/css",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />{" "}
              </h3>
              <br></br>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1px",
                }}
              >
                <Box sx={{ fontSize: "100%" }}>
                  <a href="https://github.com/AtudJerry">
                    {" "}
                    <GitHubIcon className="icon" />{" "}
                  </a>
                </Box>

                <a href="https://instagram.com/atud_jerry33?igshid=ZDdkNTZiNTM=">
                  {" "}
                  <InstagramIcon className="icon" />{" "}
                </a>

                <a href="/">
                  {" "}
                  <TwitterIcon className="icon" />{" "}
                </a>

                <a href="https://www.linkedin.com/in/atud-jerry-013798207">
                  {" "}
                  <LinkedInIcon className="icon" />
                </a>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <br></br>
      <br></br>
    </div>
  );
};
export default Home;
