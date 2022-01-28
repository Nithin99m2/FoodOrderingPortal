import { useState, useEffect } from "react";
import Navbarers from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav2";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";


const Homersk = (props) => {
    const [users, setUsers] = useState([]);
    const [use, setUse] = useState(0);
    const navigate = useNavigate();

    var hello=0;
    var yo=0;
    var ko=0;


    

    useEffect(() => {


        const mi = {
            email: localStorage.getItem("uemail")
        }
        axios
            .post("http://localhost:4000/user/lening", mi)
            .then((response) => {
                setUsers(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);






    return(
        <div classname="container">
            <Navbarers />
            <br />
            <Grid>

                <Grid item xs={12} md={9} lg={9}>
                    <Paper>
                        <Table size="small">
                           
                            <TableBody>
                                {users.map((user, ind) => (
                                    <TableRow key={ind}>
                                        
                                        {(()=>{

                                            if(user.status=="Placed"){
                                                hello=hello+1;
                                                // setUse(w);

                                            }
                                            else if(user.status=="completed"){
                                                yo=yo+1;
                                                // setUse(w);

                                            }
                                            else{
                                                ko=ko+1;

                                            }




                                        })()}
                                    
                                        




                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
            <div>
                <br/>
                Orders placed : {hello}
                <br/>
                Orders completed : {yo}
                <br/>
                Orders Pending : {ko}

            </div>
        </div >

       

    );
};

export default Homersk;
