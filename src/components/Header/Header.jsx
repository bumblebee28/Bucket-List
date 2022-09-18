import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import '../Header/styles.css'

const Header = () => {
    
    return (
        <div className="header" position="sticky">
                <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
                <div className="title">
                    Bucket List
                </div>
                    <div className="header2">
                        <div>
                            Explore new places
                        </div>
                        {/* <Autocomplete> */}                        
                                
                        <div className="search">
                            <SearchIcon id='icon'/>
                            <InputBase id="loc" placeholder="Search..." type="text" name="location" style={{color:'white'}} onKeyDown={entered} />
                            <input type="submit" id="sub" value="search" onClick={searchloc} /> 
                        </div>
                        {/* {getLocation()} */}
                    </div>
                        
                    {/* </Autocomplete> */}
                
        </div>
    )

        function searchloc() {
            var name = document.getElementById('loc').value
            console.log(name)
        }

        function entered(event) {
            if (event.key === "Enter") {
              event.preventDefault();
              document.getElementById("sub").click();
            }
          }
          

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   }
// }

// function showPosition(position) {
//   var lat = position.coords.latitude
//   var lng = position.coords.longitude
//   console.log(lat,lng)
// }
}

export default Header;