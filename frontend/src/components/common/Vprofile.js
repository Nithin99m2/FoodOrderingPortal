
import Navbarers from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav2";
import axios from "axios";

const uprof = (props) => {

    const newUser = {


        email: localStorage.getItem("uemail"),



    };

    var hamm;
    axios
        .post("http://localhost:4000/user/vgetinfo", newUser)
        .then((response) => {
            console.log(response.data);
            
            


        });



    return <div classname="container">
        <Navbarers />
        <br /><div style={{ textAlign: "center" }}>{localStorage.getItem("uemail")} -Yol!</div> <br />
        <div>{hamm}</div>




       








    </div>;

};

export default uprof;
