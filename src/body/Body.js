import * as React from 'react';
import  Avatar  from '@mui/material/Avatar';
import Stack from "@mui/material/Stack"
import { requirePropFactory } from '@mui/material';
import Box from '@mui/material/Box';
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Sidebar from '../Sidebar';
import Button from '@mui/material/Button';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import Switch from "@material-ui/core/Switch";


const Body = ({change}) => {
  return (<div> <a href = "https://drive.google.com/file/d/1ip_H3EHRxj4n7QL05bvO0eOVYpeRYGR-/view?usp=drivesdk "><Button variant='outlined'   sx = {{color: 'white', marginLeft:"30px"}}> HIRE ME  </Button> </a> 
  {/* <Switch onChange = {change}/> */}
  </div>
  )
};
export default Body;





        
        // <Stack direction="row" spacing={2}>
        // <Avatar alt = "picture here" src = "Jerry.jpg"/>
        // </Stack>

        
