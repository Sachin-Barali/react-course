import React from 'react'
import Navbar from '../layout/Navbar'
import {Typography, Button} from '@mui/material'

const Homepage = () => {
  return (
    <>
      <Navbar/>
      
      <Typography variant='h4' color='primary' align='left'>
          Homepage
      </Typography>

      <Button color='error' variant='contained'size='large' >click here</Button>



    </>
  )
}

export default Homepage
