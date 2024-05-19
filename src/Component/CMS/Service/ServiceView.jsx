import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { fetchService } from '../../../ReduxToolkit/HomeSlice'
import { Box, Typography,Grid,Card,CardContent,CardMedia } from '@mui/material';
import image1 from "../../../img/Course1.jpg"


function ServiceView() {
    const Services=useSelector(state=>state.banner)
    console.log(Services)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchService())

    },[dispatch])

  return (
    <Box>
    <Typography variant='h3' textAlign={"center"} sx={{marginTop:"10px"}}>Our Services</Typography>
    <Typography variant='body2' textAlign={"center"} sx={{marginTop:"10px"}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum saepe, rem libero enim natus consequuntur quasi quod, placeat nemo suscipit deserunt a ducimus nesciunt. Dolore exercitationem magni temporibus illum eligendi. </Typography>
    <Grid container>
        {
         Array.isArray(Services.service.data) && Services.service.data.map((item,index)=> <Grid item xs={12} md={4} sm={6} sx={{marginTop:"30px",paddingLeft:"20px"}}>
            <Card sx={{maxWidth:345,height:"300px"}}>
                <CardMedia component="img"
                  height="140"
                  image={image1}
                />
            <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
            {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
            {item.details}
        </Typography>
      </CardContent>


            </Card>

            </Grid>)
        }
    </Grid>

      
    </Box>
  )
}

export default ServiceView
