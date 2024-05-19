import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import image1 from "../../img/React.webp"
import image2 from "../../img/node.png"
import image3 from "../../img/javascript1.png"
import image4 from "../../img/HTML-removebg-preview.png"
import image5 from "../../img/CSS.webp"
import image6 from "../../img/Bootstrap.jpeg"

function Footer() {
  // const [value, setValue] = useState();

  // const handleChange = (e, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <section>
      <Grid container sx={{ backgroundColor: '#00AEAD', marginTop: '50px' }} spacing={2}>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="body1" textAlign="center">
            {' '}
            <LocationOnIcon /> SaltLake Sector V,Kolkata,West Bengal{' '}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {' '}
            <LocalPhoneIcon /> 6290652764{' '}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {' '}
            <EmailIcon /> info@gmail.com{' '}
          </Typography>
          <Typography variant="h4" textAlign="center" sx={{marginTop:"10px"}}>FOLLOW US</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center',marginTop:"10px" }}>
            <XIcon />
            <FacebookIcon />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            USEFUL LINKS
          </Typography>
          {/* <Tabs orientation="vertical" value={value} onChange={handleChange}>
            <Tab sx={{ color: 'white' }} label="Home" to="/" component={Link} />
            <Tab sx={{ color: 'white' }} label="About" to="/about" component={Link} />
            <Tab sx={{ color: 'white' }} label="Course" to="/course" component={Link} />
            <Tab sx={{ color: 'white' }} label="Blog" to="/blog" component={Link} />

          </Tabs> */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/">Home</Button>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/about">About</Button>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/course">Course</Button>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/blog">Blog</Button>
          </Box>



        </Grid>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            COURSE GALLERY
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
            <Grid item xs={4}>
              <img src={image1} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image2} alt="" height="70px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image3} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image4} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image5} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image6} alt="" height="90px" />
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            OTHERS
          </Typography>
          <Typography variant="body1" textAlign="center">
            Private Policy
          </Typography>
          <Typography variant="body1" textAlign="center">
            Term & Condition
          </Typography>
          <Typography variant="body1" textAlign="center">
            Return & Refund
          </Typography>
          <Typography variant="body1" textAlign="center">
            Support
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default Footer;
