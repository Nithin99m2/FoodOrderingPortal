import { useEffect, useState } from "react";
import Navbarer from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav1";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Uprof = (props) => {
  const [wallet, setwallet] = useState("");
  
  


  
  const navigate = useNavigate();

 

  const onChangewallet = (event) => {
    setwallet(event.target.value);
  };








   







  


 












  const onSubmit = (event) => {
    event.preventDefault();


    const neeUser = {
      email :localStorage.getItem("uemail"),
      wallet:wallet

    };



    axios
      .post("http://localhost:4000/user/walletism", neeUser)
      .then((response) => {
        alert("Added Successfully");
        console.log(response.data);
      });
 

    
    // 
    // navigate("/uprofi");





  };

  //setName({hamm});


  //resetInputs();




  return (<div classname="container">
    <Navbarer />

    <br />


    <Grid container align={"center"} spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="AddMoney"
          variant="outlined"
          value={wallet}
          onChange={onChangewallet}
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Add Money
        </Button>
      </Grid>



    </Grid>












  </div>
  );

};

export default Uprof;
