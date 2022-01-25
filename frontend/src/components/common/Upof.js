import { useState } from "react";
import Navbarer from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav1";
import axios from "axios";


const Uprof = (props) => {

    const newUser = {


        email: localStorage.getItem("uemail"),



    };

    const [hamm,setHam]=useState("");
    const [hamme,setHame]=useState("");
    const [hammee,setHamee]=useState("");
    const [hammeee,setHameee]=useState("");

    axios
        .post("http://localhost:4000/user/getinfo", newUser)
        .then((response) => {
            console.log(response.data);
            setHam(response.data.name);
            setHame(response.data.contactNumber);
            setHamee(response.data.age);
            setHameee(response.data.batchName);





        });



    return <div classname="container">
        <Navbarer />
        <br />
        <div style={{ textAlign: "center" }} >Name          : {hamm}</div>
        <div style={{ textAlign: "center" }} >ContactNumber : {hamme}</div>
        <div style={{ textAlign: "center" }} >Age           : {hammee}</div>
        <div style={{ textAlign: "center" }} >BatchName     : {hammeee}</div>














    </div>;

};

export default Uprof;
