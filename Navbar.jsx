import { Toolbar,AppBar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box>
            <AppBar style={{backgroundColor:'steelBlue'}}>
                <Toolbar>
                        <Typography variant='h4'>Hello ho are you i am hridya</Typography>
                        <Button  variant='contained' color='inherit' ><Link to={'/add'} style={{textDecoration:'none'}}>ADD</Link></Button>
                        <Button  variant='contained' color='inherit' ><Link to={'/'} style={{textDecoration:'none'}}>TABLE</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar