import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import image1 from "../../../img/about.jpg"

function About1() {
  return (
    // <Box>
    //   <Typography variant='h4' textAlign="center" sx={{marginTop:"10px"}}>About Us</Typography>
    //   <Typography variant='body2' textAlign="center" sx={{marginTop:"10px"}}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quod autem, ipsam est asperiores harum nesciunt quam numquam pariatur, veritatis, incidunt impedit veniam at. Eos perspiciatis facere similique animi vero.    </Typography>
    //   <Container>
    //     <Grid container spacing={2}>
    //       <Grid item lg={6} xs={12}>
    //         <Box>
    //           <img src={image1} alt="" style={{height:"342px",marginTop:"20px"}} />
    //         </Box>

    //       </Grid>
    //       <Grid item lg={6} xs={12}>
    //         <Box>
    //           <Typography variant='h6' sx={{marginTop:"30px"}}> Voluptatem dignissimos provident quasi corporis voluptates sit assumenda  </Typography>
    //         </Box>
    //         <Box>
    //           <Typography variant='body2' sx={{marginTop:"20px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    //      magna aliqua. </Typography>
    //         </Box>
    //         <Box>
    //           <Typography variant='body2' sx={{marginTop:"20px"}}> Ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
    //         </Box>
    //         <Box>
    //           <Typography variant='body2' sx={{marginTop:"20px"}}>Duis aute irure dolor in reprehenderit in voluptate velit.</Typography>
    //         </Box>
    //         <Box>
    //           <Typography variant='body2' sx={{marginTop:"20px"}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda </Typography>
    //         </Box>
    //       </Grid>
    //     </Grid>
    //   </Container>


    // </Box>

    <Box sx={{marginTop:"65px"}}>
  <Typography variant='h4' textAlign="center" sx={{marginTop:"10px"}}>About Us</Typography>
  <Typography variant='body2' textAlign="center" sx={{marginTop:"10px"}}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quod autem, ipsam est asperiores harum nesciunt quam numquam pariatur, veritatis, incidunt impedit veniam at. Eos perspiciatis facere similique animi vero.    </Typography>
  <Container>
    <Grid container spacing={2}>
      <Grid item lg={6} xs={12}>
        <Box>
          <img src={image1} alt="" style={{width:"100%", height:"auto", marginTop:"20px"}} />
        </Box>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Box>
          <Typography variant='h6' sx={{marginTop:"30px"}}> Voluptatem dignissimos provident quasi corporis voluptates sit assumenda  </Typography>
        </Box>
        <Box>
          <Typography variant='body2' sx={{marginTop:"20px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
        </Box>
        <Box>
          <Typography variant='body2' sx={{marginTop:"20px"}}> Ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
        </Box>
        <Box>
          <Typography variant='body2' sx={{marginTop:"20px"}}>Duis aute irure dolor in reprehenderit in voluptate velit.</Typography>
        </Box>
        <Box>
          <Typography variant='body2' sx={{marginTop:"20px"}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda </Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>

  )
}

export default About1
