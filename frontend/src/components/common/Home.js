import { useState, useEffect } from "react";
import Navbar from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/Navbar";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return <div classname="container">
  <Navbar/>
  <br/><div style={{ textAlign: "center" }}>Happy Coding - {name}</div></div>;
};

export default Home;
