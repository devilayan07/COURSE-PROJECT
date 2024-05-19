import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlog, fetchCategory, fetchCategoryWise, fetchPost, fetchSearch,add } from '../../../ReduxToolkit/BlogSlice'
import { Container, Grid, Button, CardActions, Typography, CardContent, CardMedia, Card,Box } from '@mui/material'
import { blog_pic } from '../../Helper/Helper'
import { Link } from 'react-router-dom'

function Blog() {
  const Blogs = useSelector(state => state.blog)
  console.log(Blogs)
  const dispatch = useDispatch()
  const[output,setOutput]=useState("")

  useEffect(() => {
    dispatch(fetchBlog())
    dispatch(fetchCategory())
  }, [dispatch])

  useEffect(()=>{
    dispatch(fetchPost())
  },[dispatch])

  // const truncatedText = (text, maxLength) => {
  //   if (text.length > maxLength) {
  //     return text.substring(0, maxLength) + "....";
  //   }
  //   return text;
  // };

  const truncatedText = (text, maxLength) => {
    if (text.length > maxLength) {
        text = text.substring(0, maxLength);
        text = text.replace(/<[^>]*>/g, ''); 
        return text + "....";
    }
    return text;
};

  const handleChange=(e)=>{
    setOutput(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    dispatch(fetchSearch(output))
    setOutput("")


  }

  const handleAll=()=>{
    dispatch(fetchBlog())
  }

  const handleCLick=(id)=>{
    dispatch(fetchCategoryWise(id))
  }

  const recentClick=(val)=>{
    console.log(val)
    dispatch(add(val))

  }

  return(
    <>
      <Container sx={{marginTop:"50px"}}>
        <Grid container>
          <Grid item md={8} xs={12}>
            {
              Blogs.blog.length === 0   ? (
                <Typography variant='h5' textAlign="center" sx={{marginTop:"40px"}}>No Data</Typography>
              ) : (
                <>
                  {
                   Array.isArray(Blogs.blog) && Blogs.blog.map((item, index) => <Card
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginTop: "30px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={item.title}
                        image={blog_pic(item._id)}
                        sx={{ height: 450, objectFit: "cover" }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          textAlign="center"
                          sx={{ fontWeight: "600" }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          // dangerouslySetInnerHTML={{ __html: item.postText }}
                          variant="body2"
                          sx={{ marginLeft: "15px" }}
                        >
                          {truncatedText(item.postText, 150)}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <Link to={`/blogdetails/${item._id}`}> <Button
                          size="small"
                        >
                          Read More.....
                        </Button></Link>
                      </CardActions>
                    </Card>
                    )
                  }
                </>
              )
            }
          </Grid>
          <Grid item md={4} xs={12}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems: "center",marginTop:"30px",flexDirection: "column",}}>
            <form className="form-container" onSubmit={handleSubmit}>
              <input
                type="text"
                name="input"
                id="input"
                value={output}
                onChange={handleChange}
                // style={{width:"60%"}}
              />
              <br />
              <button type="submit" style={{marginLeft:"59px",marginTop:"10px",backgroundColor:"green",color:"white"}}>
                Search
              </button>

            </form>
            <Button sx={{ marginTop: "50px",marginLeft:"0px" }} onClick={handleAll}>
              All
            </Button>

            { Array.isArray(Blogs.category)  &&  Blogs.category.map((item,index) => (
              <Button
                key={item._id}
                sx={{ marginBottom: "10px" }}
                onClick={() => handleCLick(item._id)}
              >
                {item.category}
              </Button>
            ))}
          </Box>
          <Box>
            <Typography variant='h6' sx={{marginLeft:"120px",marginTop:"20px"}}>
              Recent Posts
            </Typography>
            {
              Array.isArray(Blogs.post) && Blogs.post.map((item,index)=> <div  style={{marginLeft:"60px",marginTop:"20px",display:"flex"}}>
                <img src={blog_pic(item._id)} alt="" style={{height:"80px",width:"100px"}}/>
                <Button onClick={()=>recentClick(item)}>{item.title}</Button>
              </div> )
            }
          </Box>

          </Grid>
        </Grid>
      </Container>


    </>
  )
}

export default Blog


