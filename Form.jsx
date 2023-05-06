import { Button, TextField } from "@mui/material";
import React from 'react'

const Form = () => {
  return (
    <div>
      <br />
      <TextField variant="outlined" color="success" focused label="Name" />
      <br />
      <br />
      <TextField variant="outlined" color='success' focused label="Designation" />
      <br />
      <br />
      <TextField variant="outlined" color='success' focused label="Location" />
      <br />
      <br />
      <TextField variant="outlined"  color='success' focused label="Salary" />
      <br />
      <br />
      <Button variant="contained" color='primary'>SUBMIT</Button>
      <br />
    </div>
  )
}

export default Form