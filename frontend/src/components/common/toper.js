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
import Navbarers from "../templates/nav2";

const UsersList = (props) => {
    const [users, setUsers] = useState([]);
    const [sortedUsers, setSortedUsers] = useState([]);
    const [sortName, setSortName] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [hair, sethair] = useState([]);


    const nef = {
        email: localStorage.getItem("uemail"),
    };


    useEffect(() => {
        axios
            .post("http://localhost:4000/user/sjac", nef)
            .then((response) => {
                setUsers(response.data);
                console.log(response.data);
                setSortedUsers(response.data);
                setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const sortChange = () => {
        let usersTemp = users;
        const flag = sortName;
        usersTemp.sort((a, b) => (b.soldcount - a.soldcount));
        setUsers(usersTemp);
        sethair(usersTemp.slice(0,5));
        setSortName(!sortName);
    };


    const sortChanger = () => {
        let usersTemp = users;
        const flag = sortName;
        usersTemp.sort((a, b) => (a.soldcount - b.soldcount));
        setUsers(usersTemp);
        sethair(usersTemp.slice(0,5));
        setSortName(!sortName);
    };

    const customFunction = (event) => {
        console.log(event.target.value);
        setSearchText(event.target.value);
    };


    useEffect(() => {

        sortChange();

    }, []);

    return (
        <div classname="container">
            <Navbarers />
            <br />

            <Grid container>

                <Grid item xs={12} md={9} lg={9}>
                    <Paper>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell> Sr No.</TableCell>
                                    <TableCell>
                                        {" "}

                                        ItemName
                                        <Button onClick={sortChange}>
                                            {<ArrowUpwardIcon />}
                                        </Button>
                                        <Button onClick={sortChanger}>
                                            {<ArrowDownwardIcon />}
                                        </Button>
                                    </TableCell>
                                    <TableCell>Count</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {hair.map((user, ind) => (
                                    <TableRow key={ind}>
                                        <TableCell>{ind}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.soldcount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default UsersList;
