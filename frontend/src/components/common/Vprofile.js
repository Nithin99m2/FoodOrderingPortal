import { useState } from "react";
import Navbarers from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav2";
import axios from "axios";

const Vprof = (props) => {

    const newUser = {


        email: localStorage.getItem("uemail"),



    };

    const [hamm,setHam]=useState("");
    const [hamme,setHame]=useState("");
    const [hammee,setHamee]=useState("");
    const [hammeee,setHameee]=useState("");
    axios
        .post("http://localhost:4000/user/vgetinfo", newUser)
        .then((response) => {
            console.log(response.data);
            setHam(response.data.name);
            setHame(response.data.contactnumber);
            setHamee(response.data.shopname);
           
            
            


        });



    return <div classname="container">
        <Navbarers />
        <br />
        <div style={{ textAlign: "center" }} >Name          : {hamm}</div>
        <div style={{ textAlign: "center" }} >ContactNumber : {hamme}</div>
        <div style={{ textAlign: "center" }} >Shopname      : {hammee}</div>
        




       








    </div>;

};

export default Vprof;
