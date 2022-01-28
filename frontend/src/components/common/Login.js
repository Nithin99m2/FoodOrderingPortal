import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Register = (props) => {
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

 
 

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  
  
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  
  
  

  const resetInputs = () => {
   
    setEmail("");
    setPassword("");
    
    

   
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      
     
      email : email,
      password : password,
      
      
    };

    axios
      .post("http://localhost:4000/user/login", newUser)
      .then((response) => {
        alert(response.data);
        
        if(response.data==="Buyer Logged In"){
          localStorage.setItem("uemail",email);

          navigate("/nav");
        }
        else if(response.data==="Vendor Logged In"){
          localStorage.setItem("uemail",email);
          
          navigate("/navl");

        }
        
        console.log(response.data);

       
      });

    resetInputs();
  };

  return (
   
  
     <div className="container">
        <Navbar/>
       

      
       
    
    <br/>
     

    <Grid container align={"center"} spacing={2}>
      
      
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
      
      <Grid item xs={12}>
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Login
        </Button>
      </Grid>

     
      
     
      
    </Grid>
    

    </div>
    
    
    
    
  );
};

export default Register;
