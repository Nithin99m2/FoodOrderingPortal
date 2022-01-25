import { useNavigate } from "react-router-dom";
import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const Navbarers = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            //onClick={() => navigate("/")}
          >
            VHome
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/users")}>
            Orders
          </Button>
         
          <Button color="inherit" onClick={() => navigate("/vprofi")}>
            My Profile
          </Button>
          <Button color="inherit" onClick={() => navigate("/users")}>
            LogOut
          </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbarers;
