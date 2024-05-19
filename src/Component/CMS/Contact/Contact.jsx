import React,{useState} from 'react'
import { Box, Typography,Grid,Button,TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useDispatch } from 'react-redux';
import { fetchContact } from '../../../ReduxToolkit/ContactSlice';

function Contact() {
  const dispatch=useDispatch()
  const[user,setUser]=useState({
    name:"",
    email:"",
    phone:"",
    message:""
  })

  const[error,setError]=useState("")

  const validation=()=>{
    let error={}

    if(!user.name){
      error.name="Name is Required"
    }
    if(!user.email){
      error.email="Email is Required"
    }
    if(!user.phone){
      error.phone="Phone is Required"
    }
    if(!user.message){
      error.message="Message is Required"
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
      phone:user.phone,
      message:user.message
    }

    dispatch(fetchContact(data))

    setUser({
      name:"",
      email:"",
      phone:"",
      message:""
    })
  }

  let name,value

  const postUserData=(e)=>{
    name=e.target.name;
    value=e.target.value

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
    if(name==="phone"){
      if(value.length===0){
        setError({...error,phone:"Phone is Required"})
        setUser({...user,phone:""})
      }
      else{
        setError({...error,phone:""})
        setUser({...user,phone:value})
      }
    }
    if(name==="message"){
      if(value.length===0){
        setError({...error,message:"Message is Required"})
        setUser({...user,message:""})
      }
      else{
        setError({...error,message:""})
        setUser({...user,message:value})
      }
    }



  }
  return (
    <Box>
    <Typography variant='h3' textAlign={"center"} sx={{marginTop:"100px"}}>CONTACT US</Typography>
    <Grid container>
      <Grid item md={6} xs={12}>
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <form onSubmit={SubmitInfo}>
          <TextField
            fullWidth
            label="Name"
            id='name'
            name='name'
            margin="normal"
            value={user.name}
            onChange={postUserData}
            required
          />
                                               <span style={{color:"red"}}>
    {" "}
        {error.name}{" "}
    </span>

          <TextField
            fullWidth
            label="Email"
            id='email'
            name='email'
            margin="normal"
            value={user.email}
            onChange={postUserData}
            required
            type="email"
          />
                                               <span style={{color:"red"}}>
    {" "}
        {error.email}{" "}
    </span>

                          <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  value={user.phone}
                  onChange={postUserData}
                  autoComplete="phone"
                />
                                                     <span style={{color:"red"}}>
    {" "}
        {error.phone}{" "}
    </span>


          <TextField
            fullWidth
            label="Message"
            id='message'
            name='message'
            margin="normal"
            value={user.message}
            onChange={postUserData}
            required
            multiline
            rows={4}
          />
                                               <span style={{color:"red"}}>
    {" "}
        {error.message}{" "}
    </span>

          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    

      </Grid>

      <Grid item xs={12} md={6} sx={{marginTop:"27px",backgroundColor:"#14A085"}}>
        <Box sx={{marginTop:"40px"}}>
        <Typography variant='h6'textAlign={"center"} sx={{color:"#F4F5F8"}}><LocationOnIcon sx={{color:"#F77D0A"}}/> Office</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"white"}}>SaltLake Sector V,Kolkata,West Bengal</Typography>
        <Typography variant='h6' textAlign={"center"} sx={{color:"#F4F5F8"}}> <PhoneIcon sx={{color:"#F77D0A"}}/>Phone No</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"white"}}>6290652764</Typography>
        <Typography variant='h6' textAlign={"center"} sx={{color:"#F4F5F8"}}> <MailIcon sx={{color:"#F77D0A"}}/>Customer Service</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"white"}}>info@gmail.com</Typography>
        <Typography variant='h6' textAlign={"center"} sx={{color:"#F4F5F8"}}> <AccessTimeIcon sx={{color:"#F77D0A"}}/>Working Hours</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"white"}}>9AM To 7PM</Typography>

      </Box>







      </Grid>

    </Grid>
    <Grid container sx={{marginTop:"20px"}}>
      <Grid item xs={12} >
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3610229429755!2d88.36330207507633!3d22.528144979523386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d762bd16fd%3A0x50c3844ca79f2435!2sBallygunge%20Phari!5e0!3m2!1sen!2sin!4v1704605006795!5m2!1sen!2sin"  style={{width:"100%",height:"300px",border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0221913907435!2d88.42538367953938!3d22.578273326597976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b0bec3481d%3A0xe3a617d1a7f7d08f!2sHaldia%20petrochemicals%20Ltd.!5e0!3m2!1sen!2sin!4v1713713414443!5m2!1sen!2sin"  style={{width:"100%",height:"300px",border:"0"}}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"   title="Google Maps of Haldia Petrochemicals Ltd."
  ></iframe>

      </Grid>
    </Grid>

    
    </Box>
  )
}

export default Contact

// import React, { useState } from 'react';
// import { Box, Typography, Grid, Button, TextField } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';
// import MailIcon from '@mui/icons-material/Mail';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import { useDispatch } from 'react-redux';
// import { fetchContact } from '../../../ReduxToolkit/ContactSlice';

// function Contact() {
//   const dispatch = useDispatch();
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   const [error, setError] = useState({});

//   const validation = () => {
//     let errors = {};

//     if (!user.name) {
//       errors.name = "Name is required";
//     }
//     if (!user.email) {
//       errors.email = "Email is required";
//     }
//     if (!user.phone) {
//       errors.phone = "Phone is required";
//     }
//     if (!user.message) {
//       errors.message = "Message is required";
//     }
//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validation();
//     setError(errors);

//     if (Object.keys(errors).length === 0) {
//       const data = {
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//         message: user.message
//       };

//       dispatch(fetchContact(data));

//       setUser({
//         name: "",
//         email: "",
//         phone: "",
//         message: ""
//       });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//     setError({ ...error, [name]: value ? "" : `${name.charAt(0).toUpperCase() + name.slice(1)} is required` });
//   };

//   return (
//     <Box sx={{ padding: "0 16px", marginTop: "100px" }}>
//       <Typography variant="h3" textAlign="center" gutterBottom>Contact Us</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
//             <form onSubmit={handleSubmit}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 name="name"
//                 margin="normal"
//                 value={user.name}
//                 onChange={handleChange}
//                 required
//               />
//               <span style={{ color: "red" }}>{error.name}</span>

//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 margin="normal"
//                 value={user.email}
//                 onChange={handleChange}
//                 required
//                 type="email"
//               />
//               <span style={{ color: "red" }}>{error.email}</span>

//               <TextField
//                 fullWidth
//                 label="Phone Number"
//                 name="phone"
//                 margin="normal"
//                 value={user.phone}
//                 onChange={handleChange}
//                 required
//               />
//               <span style={{ color: "red" }}>{error.phone}</span>

//               <TextField
//                 fullWidth
//                 label="Message"
//                 name="message"
//                 margin="normal"
//                 value={user.message}
//                 onChange={handleChange}
//                 required
//                 multiline
//                 rows={4}
//               />
//               <span style={{ color: "red" }}>{error.message}</span>

//               <Button variant="contained" type="submit" sx={{ mt: 2 }}>Submit</Button>
//             </form>
//           </Box>
//         </Grid>

//         <Grid item xs={12} md={6} sx={{ backgroundColor: "#14A085", padding: 3 }}>
//           <Box sx={{ color: "white", textAlign: "center" }}>
//             <Typography variant='h6'><LocationOnIcon sx={{ color: "#F77D0A" }} /> Office</Typography>
//             <Typography variant='body1'>SaltLake Sector V, Kolkata, West Bengal</Typography>

//             <Typography variant='h6'><PhoneIcon sx={{ color: "#F77D0A" }} /> Phone No</Typography>
//             <Typography variant='body1'>6290652764</Typography>

//             <Typography variant='h6'><MailIcon sx={{ color: "#F77D0A" }} /> Customer Service</Typography>
//             <Typography variant='body1'>info@gmail.com</Typography>

//             <Typography variant='h6'><AccessTimeIcon sx={{ color: "#F77D0A" }} /> Working Hours</Typography>
//             <Typography variant='body1'>9AM To 7PM</Typography>
//           </Box>
//         </Grid>
//       </Grid>

//       <Grid container sx={{ marginTop: "20px" }}>
//         <Grid item xs={12}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0221913907435!2d88.42538367953938!3d22.578273326597976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b0bec3481d%3A0xe3a617d1a7f7d08f!2sHaldia%20petrochemicals%20Ltd.!5e0!3m2!1sen!2sin!4v1713713414443!5m2!1sen!2sin"
//             style={{ width: "100%", height: "300px", border: "0" }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Google Maps of Haldia Petrochemicals Ltd."
//           ></iframe>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Contact;

