import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'

const Header = () => {
  return (
    <AppBar sx={{ background: '#063970' }}>
      <Toolbar>
        <Typography>
          NavBar
        </Typography>
      </Toolbar> 
    </AppBar>
  );
};

export default Header;