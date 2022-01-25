import { useState } from "react";
import Navbarer from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav1";
import axios from "axios";


const Uprof = (props) => {

    const newUser = {


        email: localStorage.getItem("uemail"),



    };

    const [hamm,setHam]=useState("");

    axios
        .post("http://localhost:4000/user/getinfo", newUser)
        .then((response) => {
            console.log(response.data);
            setHam(response.data.name);





        });



    return <div classname="container">
        <Navbarer />
        <br /><div style={{ textAlign: "center" }}>{localStorage.getItem("uemail")} -Yo!</div> <br />
        <div>{hamm}</div>













    </div>;

};

export default Uprof;
