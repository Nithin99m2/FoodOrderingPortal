import { useEffect, useState } from "react";
import Navbarer from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav1";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Uprof = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [age, setAge] = useState("");
  const [batchName, setBatchName] = useState("");

  const navigate = useNavigate();


  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangecontactNumber = (event) => {
    setContactNumber(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangebatchaName = (event) => {
    setBatchName(event.target.value);
  };


  const newUser = {


    emaile: localStorage.getItem("uemail"),



  };













  useEffect(() => {
    axios
      .post("http://localhost:4000/user/getinfo", newUser)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setContactNumber(response.data.contactNumber);
        setPassword(response.data.password);
        setAge(response.data.age);
        setBatchName(response.data.batchName);





      });

  }, []);



  const resetInputs = () => {
    setName({name});
    setEmail({email});
    setPassword({password});
    setContactNumber({contactNumber});
    setAge({age});
    setBatchName({batchName});



  };












  const onSubmit = (event) => {
    event.preventDefault();


    const neeUser = {
      name: name,
      email: localStorage.getItem("uemail"),
      password: password,
      contactNumber: contactNumber,
      age: age,
      batchName: batchName,

    };



    axios
      .post("http://localhost:4000/user/bupdate", neeUser)
      .then((response) => {
        alert(response.data);
        console.log(response.data);
      });
 

    alert("Updated");
    // 
    // navigate("/uprofi");





  };

  //setName({hamm});


  //resetInputs();




  return (<div classname="container">
    <Navbarer />
    <br />
    <div style={{ textAlign: "center" }} >Name          : {name}</div>
    <div style={{ textAlign: "center" }} >ContactNumber : {contactNumber}</div>
    <div style={{ textAlign: "center" }} >Age           : {age}</div>
    <div style={{ textAlign: "center" }} >BatchName     : {batchName}</div>
    <br />


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
          label="Password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="ContactNumber"
          variant="outlined"
          value={contactNumber}
          onChange={onChangecontactNumber}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Age"
          variant="outlined"
          value={age}
          onChange={onChangeAge}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="BatchName"
          variant="outlined"
          value={batchName}
          onChange={onChangebatchaName}
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Update
        </Button>
      </Grid>



    </Grid>












  </div>
  );

};

export default Uprof;
