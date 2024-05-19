import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { fetchTestimonial } from '../../../ReduxToolkit/HomeSlice'
import { Typography, Box, Grid,Card,CardContent,CardMedia } from '@mui/material';
import { testimonial_pic } from '../../Helper/Helper';


function Testimonial() {
    const Testimonials=useSelector(state=>state.banner)
    console.log(Testimonials)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchTestimonial())
    },[dispatch])
  return (
    <Box sx={{marginTop:"20px"}}>
        <Typography variant='h3' textAlign={"center"}>Testimonials</Typography>
        <Typography variant='body2' textAlign={"center"} sx={{marginTop:"10px"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quibusdam distinctio quis beatae? Architecto minima similique praesentium aliquam provident maxime non soluta adipisci unde dolorem!   </Typography>
        <Grid container alignItems="center" justifyContent="center">
          {
            Array.isArray(Testimonials.testimonial) && Testimonials.testimonial.map((item,index)=><Grid item xs={12} md={4} sm={6}  sx={{marginTop:"30px",paddingLeft:"10px"}}>
                          <Card sx={{maxWidth:390,height:"480px"}}>
                <CardMedia component="img"
                  height="250"
                  image={testimonial_pic(item._id)}
                />
            <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
            {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" textAlign={"center"}>
            {item.position}
        </Typography>

        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
            {item.talk}
        </Typography>
      </CardContent>


            </Card>



            </Grid>)
          }
        </Grid>

      
    </Box>
  )
}

export default Testimonial
