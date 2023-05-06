import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from "@mui/material";
import axios from "axios";
import React from 'react'
import { useState,useEffect } from "react";

const Dashboard = () => {
    var [users, setUsers] = useState([]);
useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setUsers(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
},[]);

return (
  <div>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>EMAIL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((value, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{value.id}</TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Dashboard