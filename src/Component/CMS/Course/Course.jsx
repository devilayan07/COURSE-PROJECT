import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourse } from '../../../ReduxToolkit/CourseSlice'
import { Box, Grid, Typography,Button,Card,CardMedia,CardActions,CardContent } from '@mui/material'
import { course_pic } from '../../Helper/Helper'
import { Link } from 'react-router-dom'

function Course() {
  const Courses=useSelector(state=>state.course)
  console.log(Courses)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchCourse())
  },[dispatch])
  return (
    <Box sx={{marginTop:"80px"}}>
      <Typography variant='h3' textAlign="center">Our Team</Typography>
      <Grid container>
        {
          Array.isArray(Courses.course) && Courses.course.map((item,index)=> <Grid item xs={12} md={4} sx={{marginTop:"30px"}}>
                <Card sx={{ maxWidth: 280, height:"540px"}}>
      <CardMedia
        sx={{ height: 280 }}
        image={course_pic(item._id)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {item.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign="center" >
          <span style={{color:"#1abd36"}}>{item.fees}</span>
          /{item.duration}

        </Typography>
        <Typography textAlign="center" sx={{paddingTop:"5px"}}>Pre-Requisites:{item.requirement}</Typography>
        <Typography textAlign="center" sx={{paddingTop:"5px"}}>Course Duration:{item.duration}</Typography>

      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <Link to={`/courses/${item._id}`}> <Button size="small" variant='contained' sx={{backgroundColor:"#4BC567",color:"whitesmoke"}}>Apply Course</Button>
  </Link>
      </CardActions>
    </Card>

          </Grid>)
        }
      </Grid>
      
    </Box>
  )
}

export default Course
