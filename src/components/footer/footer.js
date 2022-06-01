import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {


  return (
    <AppBar position="static">
      <Container >
          <CopyrightIcon alignItems="center" />
          <Typography
            alignItems="center"
            variant="h6"
            noWrap
            component="a"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
            }}
          >
         2022 Idrees.  All rights reserved. 
        </Typography>
        
      </Container>
    </AppBar>
  );
};
export default Footer;