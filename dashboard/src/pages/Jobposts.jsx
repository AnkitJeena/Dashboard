import React from 'react';
import Sidenav from '../Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../Navbar';

const Jobposts = () => {
  return (
    <>
      <Navbar/>
      <Box height={40}/>
      <Box sx={{ display: 'flex' }}>
        <Sidenav/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Jobposts</h1>
        </Box>
      </Box>
    </>
  );
}

export default Jobposts;