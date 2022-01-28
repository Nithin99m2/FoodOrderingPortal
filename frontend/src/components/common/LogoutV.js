import { useState, useEffect } from "react";
import Navbarers from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav2";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


const Homers = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return <div classname="container">
    <Navbarers />
    <br /><div style={{ textAlign: "center" }}>Click Yes if you want to Log out...!<Button variant="contained" onClick={() => {

      navigate("/Login");




    }}>



      Yes
    </Button>
    </div></div>;
};

export default Homers;
