import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const SiderBar = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
             <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Login</ListItemText>  
                        </ListItemIcon>
                    </ListItemButton>
                </List>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <MenuIcon />
                </IconButton>
            </Drawer>
        </React.Fragment>
       
    )
}

export default SiderBar