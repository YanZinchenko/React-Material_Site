import React from 'react';
import { AppBar, Button, Container, IconButton, Toolbar, Typography, Box  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles} from '@mui/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  // menuButton: {
  //   marginRight: theme.spacing(1) 
  // },
  title: {
    flexGrow: 1
  }
}))


function App() {
  const classes = useStyles();
  return (
   <AppBar position="fixed">
     <Container fixed>
       <Toolbar>
          <IconButton edge="start" color="inherit" aria-laabel="menu" className={classes.menuButton}>
             <MenuIcon />
           </IconButton>
           <Typography variant="h6" className={classes.title}>Web Developer Blog</Typography>
           <Box mr={3}>
             <Button color="inherit" variant="outlined">Log in</Button>
           </Box>
           <Button color="secondary" variant="contained">Sign Up</Button>
       </Toolbar>
     </Container>
   </AppBar>
  );
}

export default App;
