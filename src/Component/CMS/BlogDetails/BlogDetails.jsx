import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBlogDetails, fetchComment, fetchCreate } from '../../../ReduxToolkit/BlogDetailsSlice'
import { Box, Button, Card, CardContent, CardMedia, Container,  TextField, Typography } from '@mui/material'
import { blog_pic } from '../../Helper/Helper'

function BlogDetails() {
    const[user,setUser]=useState({
        email:"",
        name:"",
        comment:""
    })
    const[error,setError]=useState("")
    const { id } = useParams()
    console.log(id)
    const { details } = useSelector(state => state.Details)
    const {comment}=useSelector(state=>state.Details)
    console.log(comment)
    console.log(details)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBlogDetails(id))
        dispatch(fetchComment(id))
    }, [dispatch, id])

   const validation=()=>{
    let error={}
    if(!user.name){
        error.name="Name is Required"
    }
    if(!user.email){
        error.email="Email is Required"
    }
    if(!user.comment){
        error.comment="Comment is Required"
    }
    return error;
   }
   console.log(error)
   
const SubmitInfo=(e)=>{
    e.preventDefault()
    setError(validation())
    const data={
        name:user.name,
        email:user.email,
        comment:user.comment
    }

    dispatch(fetchCreate({id,payload:data})).then(()=> dispatch(fetchComment(id)))

    setUser({
        name:"",
        email:"",
        comment:""
    })

}
  let name,value
  const postUserData=(e)=>{
    name=e.target.name;
    value=e.target.value;

    if(name==="name"){
        if(value.length===0){
            setError({...error,name:"Name is Required"})
            setUser({...user,name:""})
        }
        else{
            setError({...error,name:""})
            setUser({...user,name:value})
        }
    }

    if(name==="email"){
        if(value.length===0){
            setError({...error,email:"Email is Required"})
            setUser({...user,email:""})
        }
        else{
            setError({...error,email:""})
            setUser({...user,email:value})
        }
    }

    if(name==="comment"){
        if(value.length===0){
            setError({...error,comment:"Comment is Required"})
            setUser({...user,comment:""})
        }
        else{
            setError({...error,comment:""})
            setUser({...user,comment:value})
        }
    }


  }
    return (
        <Box >
            < Container sx={{ marginTop: "80px" }}>
                <Card>
                    <CardMedia component="img"
                        alt=''
                        image={blog_pic(details._id)}
                        sx={{ height: "300px", objectFit: "cover" }}

                    />
                    <CardContent>
                        <Typography variant='h5' textAlign="center">
                            {details.title}
                        </Typography>
                        <Typography
                            dangerouslySetInnerHTML={{ __html: details.postText }}
                            variant="body2"
                            sx={{ marginTop: "10px" }}
                        />

                    </CardContent>
                </Card>
                <Box>
                    {
                        Array.isArray(comment) && comment.map((item,index)=> <div>
                            <Typography variant='h5'>{item.name}</Typography>
                            <Typography variant='h5'>{item.comment}</Typography>

                        </div>  )
                    }
                </Box>
                <Box component="form"
                            sx={{
                                marginTop: "30px",
                                padding: "20px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                              }}
                 onSubmit={SubmitInfo}   
                >
                    <Typography variant='h5' textAlign="center"> Leave a Reply</Typography>
                    <TextField
                        id='name'
                        name="name"
                        label="Name"
                        fullWidth
                        variant='outlined'
                        value={user.name}
                        onChange={postUserData}
                        sx={{ marginTop: "10px" }} />
                                     <span style={{color:"red"}}>
    {" "}
        {error.name}{" "}
    </span>


                    <TextField
                        id='email'
                        name="email"
                        label="Enter the Email"
                        fullWidth
                        variant='outlined'
                        value={user.email}
                        onChange={postUserData}

                        sx={{ marginTop: "10px" }} />
                                     <span style={{color:"red"}}>
    {" "}
        {error.email}{" "}
    </span>


                    <TextField
                        id='comment'
                        name="comment"
                        label="Comment"
                        fullWidth
                        variant='outlined'
                        value={user.comment}
                        onChange={postUserData}

                        sx={{ marginTop: "10px" }} />
                                     <span style={{color:"red"}}>
    {" "}
        {error.comment}{" "}
    </span>


                        <Button type='submit' variant='contained'  sx={{marginTop:"20px"}}>Submit</Button>



                </Box>

            </Container>


        </Box>
    )
}

export default BlogDetails
