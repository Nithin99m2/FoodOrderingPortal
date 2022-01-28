import { useState, useEffect } from "react";
import Navbarer from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav1";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Homer = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return <div classname="container">
    <Navbarer />
    <br /><div style={{ textAlign: "center" }}>Click Yes if want to Log out..! <Button variant="contained" onClick={() => {

      navigate("/Login");




    }}>



      Yes
    </Button></div>



  </div>;
};

export default Homer;
