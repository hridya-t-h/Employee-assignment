import { AppBar, Box, Button,Toolbar} from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  
  const Navbar = () => {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }} align='right'>
          <AppBar position="static" style={{backgroundColor:'SteelBlue'}}>
            <Toolbar>
              <Button variant="outlined">
                <Link to="/" style={{ textDecoration :'none' ,color: "white"}}>
                  HOME
                </Link>
              </Button>
              <Button>
                <Link to="/form" style={{ textDecoration :'none', color: "white" }}>
                 EMPLOYEE FORM
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  };
  
  export default Navbar;