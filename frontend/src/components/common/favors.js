import { useState, useEffect } from "react";
import Navbarer from "/home/nithin/DASS_A1/mern-stack-boilerplate/frontend/src/components/templates/nav1";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import axios from "axios";


const Homersa = (props) => {



    const [users, setUsers] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        const news = {
            email: localStorage.getItem("uemail")


        }
        axios
            .post("http://localhost:4000/user/tenner", news)
            .then((response) => {
                setUsers(response.data.favs);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    
    return <div classname="container">
        <Navbarer />
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>Favourites Dishes...!</div>
        <Grid>

            <Grid item xs={12} md={9} lg={9}>
                <Paper>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell> Sr No.</TableCell>

                                <TableCell>Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, ind) => (
                                <TableRow key={ind}>
                                    <TableCell>{ind}</TableCell>

                                    <TableCell>{user}</TableCell>








                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>




    </div>
};

export default Homersa;
