import { useEffect, useState } from "react";
import Navbarer from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav1";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Uprof = (props) => {
  const [name, setName] = useState("");
  const [vemail, setvemail] = useState("");
  const [quantity, setquantity] = useState("");
  const [bemail, setbemail] = useState("");
  const [price, setPrice] = useState("");
  const [stats, setstatus] = useState("");
  const [shopname, setshopname] = useState("");
  const [money, setmoney] = useState("");
  





  const navigate = useNavigate();



  const onChangequantity = (event) => {
    setquantity(event.target.value);
  };


  const newUser = {


    id: localStorage.getItem("O_id"),
    status: "Placed",



  };
















  useEffect(() => {
    axios
      .post("http://localhost:4000/user/foodgetinfo", newUser)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setPrice(response.data.price);
        setvemail(response.data.email);
        setbemail(localStorage.getItem("uemail"));
        setstatus(newUser.status);
        setshopname(response.data.shopname);







      });

  }, []);




  





  const netUser = {


    email: localStorage.getItem("uemail"),



  };


  useEffect(() => {
    axios
      .post("http://localhost:4000/user/tower", netUser)
      .then((response) => {
        console.log(response.data);
        setmoney(response.data.wallet);







      });

  }, []);


  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
















  const onSubmit = (event) => {

    var hello = parseInt(quantity);
    var amount = hello * price;


    if (money >= amount) {
      console.log(amount);
      console.log(money);



      event.preventDefault();


      const neeUser = {
        name: name,
        bemail: bemail,
        vemail: vemail,
        price: price,
        quantity: quantity,
        status: stats,
        shopname: shopname,
        ordertime:time



      };



      axios
        .post("http://localhost:4000/user/placing", neeUser)
        .then((response) => {
          alert(response.data);
          console.log(response.data);
         

        });


      const ml = {
        email: localStorage.getItem("uemail"),
        dd: amount
      }



      axios
        .post("http://localhost:4000/user/machine", ml)
        .then((response) => {

          console.log(response.data);
          navigate("/carter");
        });
    }
    else {

      alert("Not enough money");
    }




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
          label="Quantity"
          variant="outlined"
          value={quantity}
          onChange={onChangequantity}
        />
      </Grid>

      <Grid item xs={12}>

        <Button variant="contained" onClick={onSubmit}>
          OrderPlace
        </Button>
      </Grid>



    </Grid>












  </div>
  );

};

export default Uprof;
