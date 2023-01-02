import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React from 'react'

const Header = () => {
  return (
    <AppBar sx={{ background: '#063970' }}>
      <Toolbar>
        <Typography>
          NavBar
        </Typography>
        <Tabs sx={{ textColor:'inherit' }}>
          <Tab label='Products' />
          <Tab label='Services' />
          <Tab label='Contact' />
          <Tab label='About' />
        </Tabs>
        <Button sx={{ ml:'auto' }}>Login</Button>
        <Button >Sing up</Button>
      </Toolbar> 
    </AppBar>
  );
};

export default Header;