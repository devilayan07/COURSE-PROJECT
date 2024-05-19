import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeam } from '../../../ReduxToolkit/AboutSlice'
import { Box, Grid, Typography,Card,CardContent,CardMedia } from '@mui/material'
import { team_pic } from '../../Helper/Helper'
import About1 from '../About1/About1'

function About() {
    const Team=useSelector(state=>state.about)
    console.log(Team)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchTeam())
    },[dispatch])
  return (
    <>
    <About1/>
    
    <Box sx={{marginTop:"80px"}}>
      <Typography variant='h3' textAlign="center">Our Team</Typography>
      <Typography variant='body2' textAlign="center" sx={{padding:"20px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis dolorem quam consequuntur consequatur tenetur ab error vitae molestiae repudiandae est facere, voluptatem alias esse repellat aspernatur pariatur natus quo?  </Typography>
      <Grid container>
        {
          Array.isArray(Team.team) && Team.team.map((item,index)=> <Grid item xs={12} md={3} sm={6} sx={{marginTop:"30px"}}>
                <Card sx={{ maxWidth: 360,height:"420px" }}>
      <CardMedia
        sx={{ height: 290 }}
        image={team_pic(item._id)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {item.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign="center">
          {item.possession}
        </Typography>
      </CardContent>
      </Card>

          </Grid>)
        }
      </Grid>
      
    </Box>
    </>
  )
  
}

export default About
