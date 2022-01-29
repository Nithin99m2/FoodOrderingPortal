import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/Navbar";
import Navbarers from "../templates/nav2";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setrating] = useState("");
  const [type, settype] = useState("");
  const [shopname, setshopname] = useState("");
  const [opentime, setopentime] = useState("");
  const [closetime, setClosetime] = useState("");
  


  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeprice = (event) => {
    setPrice(event.target.value);
  };

  const onChangerating = (event) => {
    setrating(event.target.value);
  };

  const onChangetype = (event) => {
    settype(event.target.value);
  };

  const newUsed = {


    email:localStorage.getItem("uemail")



  };



  useEffect(() => {
    axios
      .post("http://localhost:4000/user/getshop", newUsed)
      .then((response) => {
        console.log(response.data);
        setshopname(response.data.shopname);
        setopentime(response.data.opentime);
        setClosetime(response.data.closetime);
        
       
       





      });

  }, []);


  

  const resetInputs = () => {
    setName("");
    setEmail("");
    setPrice("");
    settype("");
    setrating("");
  


   
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: localStorage.getItem("uemail"),
      price : price,
      type : type,
      rating : rating,
      shopname:shopname,
      opentime:opentime,
      closetime:closetime

      
      
    };

    axios
      .post("http://localhost:4000/user/addfood", newUser)
      .then((response) => {
        alert("Successfully added");
        console.log(response.data);
      });

    resetInputs();
  };

  return (
    <div className="container">
    <Navbarers/>
   

  
   

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
          label="price"
          variant="outlined"
          value={price}
          onChange={onChangeprice}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="type"
          variant="outlined"
          value={type}
          onChange={onChangetype}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="rating"
          variant="outlined"
          value={rating}
          onChange={onChangerating}
        />
      </Grid>
      
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Add
        </Button>
      </Grid>
    </Grid>
    </div>
  );
};

export default Register;
