import React from 'react'
import Slider from "react-slick";
import { Box,Typography,Grid } from '@mui/material';
import image1 from "../../img/Wipro-logo.png"
import image2 from "../../img/Tata_Consultancy_Services_Logo.svg.png"
import image3 from "../../img/Infosys_logo.svg.png"
import image4 from "../../img/Accenture.svg.png"

function Companies() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
      <Box textAlign="center" mb={2}>
    <Typography variant="h4" sx={{color:"#F77D0A",marginTop:"20px"}}>Brands Associated With Us</Typography>
  </Box>
  <Grid container justifyContent="center" sx={{marginTop:"20px"}}>
    <Grid item xs={12} md={10} lg={8}>
      <Box width="100%">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="" style={{ height: "100px" }} />
          </div>
          <div>
            <img src={image2} alt="" style={{ height: "110px" }} />
          </div>
          <div>
            <img src={image3} alt="" style={{ height: "100px" }} />
          </div>
          <div>
            <img src={image4} alt="" style={{ height: "100px" }} />
          </div>
        </Slider>
      </Box>
    </Grid>
  </Grid>

      
    </>
  )
}

export default Companies
