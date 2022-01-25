import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/Navbar";

const Register = (props) => {
  const [name, setName] = useState("");
  const [shopname, setShopName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [opentime, setopentime] = useState("");
  const [closetime, setclosetime] = useState("");

 
 


  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeShopName = (event) => {
    setShopName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  
  const onChangecontactNumber = (event) => {
    setContactNumber(event.target.value);
  };

  const onChangeOpentime = (event) => {
    setopentime(event.target.value);
  };

  const onChangeclosetime = (event) => {
    setclosetime(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setShopName("");
    setPassword("");
    setEmail("");
    setContactNumber("");
    setopentime("");
    setclosetime("");


   
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      shopname: shopname,
      password : password,
      email : email,
      contactnumber: contactnumber,
      opentime :opentime,
      closetime : closetime,
      
    };

    axios
      .post("http://localhost:4000/user/vr", newUser)
      .then((response) => {
        alert("Created\t" + response.data.name);
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
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeUsername}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="ShopName"
          variant="outlined"
          value={shopname}
          onChange={onChangeShopName}
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
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
      
      <Grid item xs={12}>
        <TextField
          label="ContactNumber"
          variant="outlined"
          value={contactnumber}
          onChange={onChangecontactNumber}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="OpenTime"
          variant="outlined"
          value={opentime}
          onChange={onChangeOpentime}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="CloseTime"
          variant="outlined"
          value={closetime}
          onChange={onChangeclosetime}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Register
        </Button>
      </Grid>
    </Grid>
    </div>
  );
};

export default Register;
