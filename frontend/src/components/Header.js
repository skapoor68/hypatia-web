import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#282828' }}>
      <Toolbar>
        <Typography variant="h4" component="h1" sx={{ flexGrow: 1, textAlign: 'center', color: 'white' }}>
          LEO Network Simulator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;