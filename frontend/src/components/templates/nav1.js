import { useNavigate } from "react-router-dom";
import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const Navbarer = () => {
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
            BHome
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/addtocart")}>
            Items
          </Button>
         
          <Button color="inherit" onClick={() => navigate("/carter")}>
            MyCart
          </Button>
          <Button color="inherit" onClick={() => navigate("/uprofi")}>
            My Profile
          </Button>
          <Button color="inherit" onClick={() => navigate("/ulogout")}>
            Logout
          </Button>
          <Button color="inherit" onClick={() => navigate("/Favour")}>
            Favourites
          </Button>
          <Button color="inherit" onClick={() => navigate("/Sk")}>
            Mywallet
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbarer;
