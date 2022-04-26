import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Product from '../../Product'
import {Container, Typography} from '@mui/material'

const Productspage = () => {
  return (
    <>
      <Navbar/>
      <Container>
      <div className="row">
        <div className="col-md-3">
          <Typography variant="h4" color="secondary" pl={5} pt={5}>Departments</Typography>
            
        </div>
        <div className="col-md-8">
            <Product/>
        </div>
      </div>
      </Container>

      
      <Footer/>
    </>
  )
}

export default Productspage
