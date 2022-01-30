import axios from "axios";
import { useState, useEffect } from "react";
import Navbarers from "../templates/nav2";


const Prom = (props) => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/profile") // unimplemented
      .then((response) => {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
   
  return <div classname="container">
    <Navbarers/>
    <br/>
    <h1 style={{ textAlign: "center" }}>Vendor Home</h1>
    <br/>
  </div>;
};

export default Prom;
