import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
// import { Pageview } from '@mui/icons-material';


const pages = ["Products", "Services", "Contact", "About", "Login", "SingUp"];

const SiderBar = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
             <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {
                        pages.map((page, index) => (
                            <ListItemButton key={index}> {/* onClick={() => setOpenDrawer(false)} */}
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>  
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                    
                </List>
                <IconButton sx={{ color:'white', ml:'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                    <MenuIcon />
                </IconButton>
            </Drawer>
        </React.Fragment>
       
    )
}

export default SiderBar