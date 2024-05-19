import React,{useEffect} from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import {useSelector,useDispatch} from "react-redux"
import { banner_pic } from '../../Helper/Helper';
import { fetchBanner } from '../../../ReduxToolkit/HomeSlice';
import { Link } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function BannerView() {
  const Banners=useSelector(state=>state.banner)
  console.log(Banners)
  const dispatch=useDispatch()

  const navItems=["about","course","blog"]

  useEffect(()=>{
    dispatch(fetchBanner())
  },[dispatch])
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%' }}>
    <AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {Banners.banner.map((step, index) => (
        <div key={step._id}>
          {Math.abs(activeStep - index) <= 2 && (
            <Box
              sx={{
                position: 'relative',
                height: '1000px', // This height seems unusually large, make sure it's what you intended
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={banner_pic(step._id)} // Assuming step._id is the correct identifier for the banner image
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  color: '#fff',
                  padding: 2,
                  margin: '0 auto',
                  width: '750px',
                  backgroundColor: '#1a1e1e',
                  borderTop: '4px solid green',
                  height: '250px',
                }}
              >
                <Typography variant="h5" component="div" textAlign="center">
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '30px',
                  }}
                >
                  {step.description}
                </Typography>
                               <Button variant='outlined' size='small' sx={{               position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
   }}>Read More</Button>
    
                


              </Box>
            </Box>
          )}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  </Box>


  );
}

export default BannerView;