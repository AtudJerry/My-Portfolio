import React from "react";
import { Typography } from "@mui/material";
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
  




function Sidebar() {

    return( 
        <ProSidebar style = {{height : "650px"}}>
            <SidebarContent>
                <SidebarHeader>header</SidebarHeader>
                <Menu>
                    <MenuItem>
                    <Typography variant ="h8"> menu item</Typography>
                    </MenuItem>

                    <MenuItem>
                    <Typography variant ="h8"> menu item</Typography>
                    </MenuItem>

                    <MenuItem>
                    <Typography variant ="h8"> menu item</Typography>
                    </MenuItem>

                    <MenuItem>
                    <Typography variant ="h8"> menu item</Typography>
                    </MenuItem>





                </Menu>




            </SidebarContent>
            <SidebarFooter>dfsfsfsdfs</SidebarFooter>
        </ProSidebar>









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
    