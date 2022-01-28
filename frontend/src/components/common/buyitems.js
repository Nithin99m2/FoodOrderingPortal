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


const Iod = (props) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:4000/user/ten")
      .then((response) => {
        setUsers(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  

  return (
    <div classname="container">
      <Navbarer />
      <br />
      <Grid>

        <Grid item xs={12} md={9} lg={9}>
          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell> Sr No.</TableCell>
                  <TableCell>
                    {" "}

                    Type
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Shopname</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, ind) => (
                  <TableRow key={ind}>
                    <TableCell>{ind}</TableCell>
                    <TableCell>{user.type}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.rating}</TableCell>
                    <TableCell>{user.price}</TableCell>
                    <TableCell>{user.shopname}</TableCell>
                    
                    <TableCell> <Button variant="contained" onClick={()=>{
                      localStorage.setItem("O_id",user._id);

                      navigate("/quantity");





                    }}> 

                      
            
                      Order
                    </Button></TableCell>
                    <TableCell> <Button variant="contained" onClick={()=>{
                      const nUser = {
                        email: localStorage.getItem("uemail"),
                        name: user.name

                      };

                      axios
                        .post("http://localhost:4000/user/far", nUser)
                        .then((response) => {
                          alert("success");
                          console.log(response.data);
                        });




                    }}> 

                      
            
                      AddtoFav
                    </Button></TableCell>
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

export default Iod;
