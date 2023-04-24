import React, { useEffect, useState } from "react";
import { IconButton, Typography, colors } from "@mui/material";
import "./App.scss"
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
  } from "react-pro-sidebar";
  import HomeIcon from '@mui/icons-material/Home';
  import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
  import PollIcon from '@mui/icons-material/Poll';
  import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MenuIcon from '@mui/icons-material/Menu';



function Sidebar() {
  const [width,setwidth] = useState("")
  const [collapse,setCollapse] = useState(false)
  const [display,setDisplay] = useState("")
  const [breakpoint,setBreakpoint] = useState(false)
  const getsize = () => {
    setwidth(window.innerWidth)
  }
  useEffect( () => {
    window.addEventListener('resize',getsize)
    if (width < 900){
      setCollapse(false)
      setBreakpoint(true)
      


    } else{
      setCollapse(true)
      setBreakpoint(false)
    
    }
    return () => {
      window.removeEventListener('resize', getsize)
    }

  },[window.innerWidth])

  function brea(){
    setBreakpoint(!breakpoint)
  }
  

    return( 
      <div>
        <Box className="menu">
          <IconButton onClick={brea} variant = "contained" color="primary"> <MenuIcon/></IconButton>
           
        </Box>
        <ProSidebar collapsed = {collapse} breakPoint = {breakpoint? "sm": ""} className = "sidebar" mt ="50px" brakpoint = "sm" style = {{height : "100vh", borderRadius : "80%", opacity : "0.8"}}>
            <SidebarContent>
                <SidebarHeader><br></br></SidebarHeader>
                <Menu>
                    <Box>
                    <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={require('./jerry.jpg')}
                  style={{ marginLeft : "51px", marginTop : "20px" ,cursor: "pointer", borderRadius: "90%" }}
                /> 
                <Box textAlign="center">
                <Typography
                  variant="h5"
                  color='white'
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Atud
                </Typography>
                </Box>
                
                
                <br></br> <br></br>
                    </Box>
                    <MenuItem icon = {<HomeIcon/>}>
                    <Link to="/Components/Home">Home </Link>
                    {/* <Typography variant ="h6"> Home</Typography> */}
                    </MenuItem>
                    <MenuItem icon = {<PollIcon/>}>
                        
                        <Link to="/Components/Skills">Skills</Link>
            
            
                        </MenuItem>

                    <MenuItem icon = {<ContactPhoneIcon/>}>
                        
                    <Link to="/Components/Contact">Contact</Link>
        
        
                    </MenuItem>
        
                    <Box className="sub">
                    <SubMenu icon = {<PollIcon/>} title='Other Skills' >
                  
                        <MenuItem>
                    <Typography variant ="h8"> Reactjs</Typography>
                    </MenuItem>
                    <MenuItem>
                    <Typography variant ="h8"> Html/css</Typography>
                    </MenuItem>
                    <MenuItem>
                    <Typography variant ="h8">Python </Typography>
                    </MenuItem>
                    <MenuItem>
                    <Typography variant ="h8"> Digital drawing</Typography>
                    </MenuItem>
                
                    </SubMenu>
                    </Box>

                    <MenuItem icon = {<InfoIcon/>}>
                   
        <Link to="/Components/About">About</Link>
                    </MenuItem>
                    <MenuItem icon = {< FileDownloadIcon/>}>
                   
                   <Link to="/Components/Resume">Curriculum vitae</Link>
                               </MenuItem>





                </Menu>




            </SidebarContent>
            <SidebarFooter>.</SidebarFooter>
        </ProSidebar>
        


</div>






)

}
export default Sidebar







        {/* <ProSidebar style={{height:'800px', width: "20%", color : 'transparent'}}>
            <SidebarHeader> <Typography>sfsdfdsfsdfsd</Typography></SidebarHeader>
            <SidebarContent>
            <Menu>
                <MenuItem>
                <Typography>sfsdfdsfsdfsd</Typography>

                </MenuItem>



            </Menu>
            </SidebarContent>






        </ProSidebar> */}
    