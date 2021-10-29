import React from 'react';
import { AppBar, Button, Container, IconButton, Toolbar, Typography, Box, Paper, Grid  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles} from '@mui/styles';
import { spacing } from '@mui/system';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  // menuButton: {
  //   marginRight: theme.spacing(1) 
  // },
  title: {
    flexGrow: 1
  },
  mainFeaturestPost: {
    position: "relative",
    // color: theme.palette.common.white,
    color: "white",
    // marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    color: "white"
  //   padding: theme.spacing(10) Error- I dont now how creat normal spacing 
  }
}))


function App() {
  const classes = useStyles();
  return (
    <>
   <AppBar position="fixed">
     <Container fixed>
       <Toolbar>
          <IconButton edge="start" color="inherit" aria-laabel="menu" className={classes.menuButton}>
             <MenuIcon />
           </IconButton>
           <Typography variant="h6" className={classes.title}>Yan Zinchenko</Typography>
           <Box mr={3}>
             <Button color="inherit" variant="outlined">Log in</Button>
           </Box>
           <Button color="secondary" variant="contained">Sign Up</Button>
       </Toolbar>
     </Container>
   </AppBar>

   <main>
     <Box sx={{ marginBottom: 8 }} />
     <Paper className={classes.mainFeaturestPost} 
     style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
     >
       <Container fixed>
         <div className={classes.overlay}/>
          <Grid container>
             <Grid item md={6}>
             <Box sx={{ padding: 6 }} />
               <div className={classes.mainFeaturesPostContent}>
                 <Typography 
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                    >
                   Web Developer Blog
                 </Typography>
                 <Typography 
                    component="h5"
                    color="inherit"
                    paragraph
                    >
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Optio, quibusdam assumenda maxime perferendis 
                   illum ipsum ratione reprehenderit facilis.
                 </Typography>
                 <Button variant="contained" color="secondary">
                   Learn more
                 </Button>
                 <Box sx={{ paddingBottom: 9 }} />
               </div>
             </Grid>
          </Grid>
       </Container>
     </Paper>
     <div className={classes.mainContent}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Web Developer Blog</Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Optio, quibusdam assumenda maxime perferendis 
                   illum ipsum ratione reprehenderit facilis.Illum ipsum ratione reprehenderit facilis.</Typography>
          <div className={classes.mainButtons}>
               <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">Start Now</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">Learn More</Button>
                    </Grid>
               </Grid>
          </div>         
        </Container>
     </div>
   </main>
   </>
  );
}

export default App;
