// import { Drawer, IconButton,List,  ListItemButton, ListItemIcon } from '@mui/material'
// import React,{useState} from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// //  const Pages=["home","about","product","login"]
// function DrawerComp() {
//     const[open,setOpen]=useState(false)
//     const handleClose=()=>{
//         setOpen(false)
//     }

//     const handleOpen=()=>{
//         setOpen(!open)
//     }
//   return (
//     <>
//     <Drawer PaperProps={{sx:{backgroundColor:"#1c1e32"}}} open={open} onClose={handleClose}>
//     <List>
        
//             <ListItemButton  onClick={handleClose} >
//             <ListItemIcon>
                
//                 <ul className='mobile-navigation'>
//                     <li>
//                     <Link onClick={handleClose} to={"/"}>Home</Link>
//                     </li>
//                     <li>
//                         <Link onClick={handleClose} to={"/about"}>About</Link>
//                     </li>
//                     <li>
//                         <Link onClick={handleClose} to={"/course"}>Courses</Link>
//                     </li>
//                     <li>
//                         <Link onClick={handleClose} to={"/blog"}>Blog</Link>
//                     </li>
//                     <li>
//                     <Link onClick={handleClose} to={"/contact"}>Contact</Link>

//                     </li>

//                     <li>
//                         <Link onClick={handleClose} to={"/login"}>Login</Link>
//                     </li>
//                 </ul>
                


//             </ListItemIcon>
//             </ListItemButton>

            
            
        
   

//     </List>

//     </Drawer>
//     <IconButton sx={{marginLeft:"auto"}} onClick={handleOpen}>
//         <MenuIcon/>
//     </IconButton>
    
//     </>
//   )
// }

// export default DrawerComp


import React, { useState, useEffect } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

function DrawerComp() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        handleClose();
    }, [location.pathname]); // Close drawer on route change

    return (
        <>
            <Drawer 
                PaperProps={{ sx: { backgroundColor: "#1c1e32" } }} 
                open={open} 
                onClose={handleClose}
            >
                <List>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/about">About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/course">Courses</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/blog">Blog</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/contact">Contact</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/login">Login</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton 
                sx={{ marginLeft: "auto" }} 
                onClick={handleToggle}
            >
                <MenuIcon />
            </IconButton>
        </>
    );
}

export default DrawerComp;

