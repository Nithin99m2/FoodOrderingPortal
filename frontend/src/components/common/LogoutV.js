import { useState, useEffect } from "react";
import Navbarers from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav2";

const Homers = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return <div classname="container">
  <Navbarers/>
  <br/><div style={{ textAlign: "center" }}>Are you sure want to LogOut ?</div></div>;
};

export default Homers;
