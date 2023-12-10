import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppStore } from './appStore';

const AppBar = styled(MuiAppBar, {
  })(({theme}) => ({
    zIndex: theme.zIndex.drawer + 1,
  }));

export default function Navbar() {
    const updateOpen = useAppStore((state)=> state.updateOpen);
    const dopen = useAppStore((state)=> state.dopen);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>updateOpen(!dopen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Student Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}