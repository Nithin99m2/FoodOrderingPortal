import { useEffect, useState } from "react";
import Navbarers from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav2";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Vprof = (props) => {
    const [name, setName] = useState("");
    const [shopname, setShopName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [contactnumber, setContactNumber] = useState("");
    const [opentime, setopentime] = useState("");
    const [closetime, setclosetime] = useState("");
    const [counter, setcounter] = useState("");

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

    const newUser = {


        email: localStorage.getItem("uemail"),



    };

    

    useEffect(() => {
        axios
            .post("http://localhost:4000/user/vgetinfo", newUser)
            .then((response) => {
                console.log(response.data);
                setName(response.data.name);
                setContactNumber(response.data.contactnumber);
                setShopName(response.data.shopname);
                setPassword(response.data.password);
                setopentime(response.data.opentime);
                setclosetime(response.data.closetime);
                setcounter(response.data.counter);





            });

    }, []);


    const onSubmit = (event) => {
        event.preventDefault();
    
        const newVser = {
          name: name,
          shopname: shopname,
          password : password,
          email : localStorage.getItem("uemail"),
          contactnumber: contactnumber,
          opentime :opentime,
          closetime : closetime,
          
        };
    
        axios
          .post("http://localhost:4000/user/vupdate", newVser)
          .then((response) => {
            alert(response.data);
            console.log(response.data);
          });

        alert("Updated");
    
        
      };


    return (<div classname="container">
        <Navbarers />
        <br />
        <div style={{ textAlign: "center" }} >Name          : {name}</div>
        <div style={{ textAlign: "center" }} >ContactNumber : {contactnumber}</div>
        <div style={{ textAlign: "center" }} >Shopname      : {shopname}</div>
        <div style={{ textAlign: "center" }} >Counter      : {counter}</div>
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
          Update
        </Button>
      </Grid>
    </Grid>















    </div>
    );

};

export default Vprof;
