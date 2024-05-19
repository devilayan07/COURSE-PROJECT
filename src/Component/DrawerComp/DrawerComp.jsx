import { Drawer, IconButton,List,  ListItemButton, ListItemIcon } from '@mui/material'
import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

//  const Pages=["home","about","product","login"]
function DrawerComp() {
    const[open,setOpen]=useState(false)
    const handleClose=()=>{
        setOpen(false)
    }

    const handleOpen=()=>{
        setOpen(!open)
    }
  return (
    <>
    <Drawer PaperProps={{sx:{backgroundColor:"#1c1e32"}}} open={open} onClose={handleClose}>
    <List>
        
            <ListItemButton  onClick={handleClose} >
            <ListItemIcon>
                
                <ul className='mobile-navigation'>
                    <li>
                    <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/course"}>Courses</Link>
                    </li>
                    <li>
                        <Link to={"/blog"}>Blog</Link>
                    </li>
                    <li>
                    <Link to={"/contact"}>Contact</Link>

                    </li>

                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                </ul>
                


            </ListItemIcon>
            </ListItemButton>

            
            
        
   

    </List>

    </Drawer>
    <IconButton sx={{marginLeft:"auto"}} onClick={handleOpen}>
        <MenuIcon/>
    </IconButton>
    
    </>
  )
}

export default DrawerComp
