import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import SiderBar from './SiderBar';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const pages = ["Products", "Services", "Contact", "About"]
const Header = () => {

  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#063970' }}>
        <Toolbar>
          <ProductionQuantityLimitsIcon />
          {
            isMatch ? (
              <>
                <Typography sx={{ fontSize: '1.5rem', paddingLeft:'10%' }}>Shop</Typography>
                <SiderBar />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ ml: 'auto' }}
                  textColor='inherit'
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  indicatorColor='secondary'
                >
                  {
                    pages.map((page, index) => (
                    <Tab key={index} label={page} />
                      
                    ))
                  }
                </Tabs>
                <Button sx={{ ml: 'auto' }} variant='contained'>Login{" "}</Button>
                <Button sx={{ ml: '10px' }} variant='contained'>Sing up{" "}</Button>
              </>
            )
          }
        </Toolbar> 
      </AppBar>
    </React.Fragment>
    
  )
}

export default Header;