import { useState, useEffect } from "react";
import Navbarer from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav1";

const Homer = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return <div classname="container">
  <Navbarer/>
  <br/><div style={{ textAlign: "center" }}>Are you sure want to LogOut ?</div></div>;
};

export default Homer;
