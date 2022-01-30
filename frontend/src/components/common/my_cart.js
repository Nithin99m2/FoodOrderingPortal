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
import Navbarer from "../templates/nav1";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const FoodLista = (props) => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
   


    useEffect(() => {


        const mi = {
            email: localStorage.getItem("uemail")
        }
        axios
            .post("http://localhost:4000/user/jm", mi)
            .then((response) => {
                setUsers(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const onSubmit = (event) => {

    }

    return (
        <div classname="container">
            <Navbarer />
            <br />
            <h1 style={{ textAlign: "center" }}>My Cart</h1>
    <br/>
            <Grid>

                <Grid item xs={12} md={9} lg={9}>
                    <Paper>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell> Sr No.</TableCell>

                                    <TableCell>Name</TableCell>
                                    <TableCell>vendor</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Shopname</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Ordertime</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user, ind) => (
                                    <TableRow key={ind}>
                                        <TableCell>{ind}</TableCell>

                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.vemail}</TableCell>
                                        <TableCell>{user.price}</TableCell>
                                        <TableCell>{user.quantity}</TableCell>
                                        <TableCell>{user.shopname}</TableCell>
                                        <TableCell>{user.status}</TableCell>
                                        <TableCell>{user.ordertime}</TableCell>
                                        <TableCell>{(() => {
                                            if (user.status === "ReadyforPickup") {
                                                return <Button variant="contained" onClick={() => {
                                                    

                                                    const nth = {
                                                        id: user._id,

                                                    };

                                                    axios
                                                        .post("http://localhost:4000/user/emphasis", nth)
                                                        .then((response) => {
                                                            alert(response.data);
                                                            window.location.reload(false);
                                                            console.log(response.data);
                                                        });


                                                   



                                                }}>



                                                    PickUp
                                                </Button>
                                            }

                                        })()}</TableCell>
                                        <TableCell>{(() => {
                                            if (user.status === "completed") {
                                                return <Button variant="contained" onClick={() => {


                                                }}>



                                                    RateItem
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

export default FoodLista;
