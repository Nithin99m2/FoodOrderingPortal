import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Navbar from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Navbarers from "../templates/nav2";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const FoodList = (props) => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [yg, setyg] = useState(0);
    var hello = 0;

    var val = 1;






    useEffect(() => {
        const heh = {
            email: localStorage.getItem("uemail")
        }
        axios
            .post("http://localhost:4000/user/lela", heh)
            .then((response) => {
                setUsers(response.data);

            })
            .catch((error) => {
                console.log(error);
            });



        axios
            .post("http://localhost:4000/user/lcu", heh)
            .then((response) => {
                setyg(response.data.counter);
               
            })
            .catch((error) => {
                console.log(error);
            });



    }, []);




    // useEffect(() => {
    //     const hehr = {
    //         email: localStorage.getItem("uemail")
    //     }
    //     
    // }, []);


   


    return (
        <div classname="container">
            <Navbarers />
            <br />
            <h1 style={{ textAlign: "center" }}>Current Status of Orders</h1>
            <br />
            <Grid>

                <Grid item xs={12} md={9} lg={9}>
                    <Paper>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell> Sr No.</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>BuyerEmail</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>OrderTime</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user, ind) => (
                                    <TableRow key={ind}>
                                        <TableCell>{ind}</TableCell>

                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.bemail}</TableCell>
                                        <TableCell>{user.price}</TableCell>
                                        <TableCell>{user.quantity}</TableCell>
                                        <TableCell>{user.status}</TableCell>
                                        <TableCell>{user.ordertime}</TableCell>
                                        <TableCell>{(() => {
                                            console.log(user.yes);

                                            if (user.status == "Accepted" && user.yes == 0) {

                                                var templateParams = {
                                                    subject: user.name,
                                                    name: 'Dear Buyer, Your order has been Accepted',



                                                };
// template_ikeuk05


                                                emailjs.send('service_ti4v7h2', 'template_ikeuk05', templateParams, 'user_a2QmVasySjQNnNT8Aix7m')
                                                    .then(function (response) {
                                                        console.log('SUCCESS!', response.status, response.text);
                                                    }, function (error) {
                                                        console.log('FAILED...', error);
                                                    });

                                                const hebh = {
                                                    id: user._id,
                                                }
                                                axios
                                                    .post("http://localhost:4000/user/hopes", hebh)
                                                    .then((response) => {
                                                        console.log(response.data);
                                                    })
                                                    .catch((error) => {
                                                        console.log(error);
                                                    });



                                            }
                                            if (user.status == "Rejected" && user.ant == 0) {

                                                var templateParams = {
                                                    subject: user.name,
                                                    name: 'Dear Buyer, Your order has been Rejected',



                                                };



                                                emailjs.send('service_ti4v7h2', 'template_ikeuk05', templateParams, 'user_a2QmVasySjQNnNT8Aix7m')
                                                    .then(function (response) {
                                                        console.log('SUCCESS!', response.status, response.text);
                                                    }, function (error) {
                                                        console.log('FAILED...', error);
                                                    });

                                                const hebh = {
                                                    id: user._id,
                                                }
                                                axios
                                                    .post("http://localhost:4000/user/hopesof", hebh)
                                                    .then((response) => {
                                                        console.log(response.data);
                                                    })
                                                    .catch((error) => {
                                                        console.log(error);
                                                    });



                                            }






                                            if (user.status != "ReadyforPickup" && user.status != "Rejected" && user.status != "completed") {

                                                return <Button variant="contained" onClick={() => {


                                                    const nth = {
                                                        id: user._id,

                                                    };

                                                    axios
                                                        .post("http://localhost:4000/user/emphasis", nth)
                                                        .then((response) => {
                                                            alert(response.data);
                                                            if (response.data === "Moved to the next stage") {
                                                                window.location.reload(false);
                                                                console.log(response.data);

                                                            }

                                                        });




                                                }}>




                                                    MovetoNextstage
                                                </Button>
                                            }



                                        })()}
                                        </TableCell>
                                        <TableCell>{(() => {
                                            if (user.status == "Placed") {

                                                return <Button variant="contained" onClick={() => {
                                                    const nth = {
                                                        id: user._id,

                                                    };

                                                    axios
                                                        .post("http://localhost:4000/user/emphasiser", nth)
                                                        .then((response) => {
                                                            alert(response.data);
                                                            window.location.reload(false);
                                                            console.log(response.data);
                                                        });


                                                    var qu = user.quantity;
                                                    var pr = user.price;
                                                    qu = qu * pr;

                                                    const sd = {
                                                        email: user.bemail,
                                                        addi: qu

                                                    }

                                                    axios
                                                        .post("http://localhost:4000/user/refund", sd)
                                                        .then((response) => {


                                                            console.log(response.data);
                                                        });



                                                }}>



                                                    Reject
                                                </Button>
                                            }
                                        })()}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
};

export default FoodList;
