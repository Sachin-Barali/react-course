import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import {Box, Container, Typography} from '@mui/material'

const Blog = () => {
  return (
    <>
      <Navbar/>

        <Typography variant='h3' align='center' padding={5}>Blogs</Typography>
        <Container maxWidth='md' padding={4} >
            <Box className='Blog-content'width={'75%'} display={'flex'} sx={{
                   '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  }
            }}>
                <Box className='Blog-title'>Blog title</Box>
                <Box className='Blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores ex veritatis dolorum sed ipsa accusantium! Ratione veniam nobis aspernatur odio fugit illo voluptates dolore aperiam fuga, incidunt ab aliquid ipsum voluptatem eaque quas amet omnis? Atque expedita perspiciatis voluptas, totam dolor, architecto sequi at reiciendis omnis id, laudantium cumque.</Box>
            </Box>
            <Box className='Blogger-info'width={'25%'}>
                <Box className='Blogger-image'>
                    <img src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </Box>
                <Box className='Blogger-name'></Box>
            </Box>
        </Container>

      <Footer/>
    </>
  )
}

export default Blog
