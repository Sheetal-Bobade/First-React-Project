import React from "react";
import Sidenav from "../Component/Sidenav";
import Navbar from "../Component/Navbar";
import Box from '@mui/material/Box';


function AboutDashboard(){
    return(
        <div>
            <Box height={50} />
            <Box sx={{ display: 'flex' }}>
            <Navbar/>
            <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>About</h1>
            </Box>
            </Box>
            
            
        </div>
    )
}

export default AboutDashboard