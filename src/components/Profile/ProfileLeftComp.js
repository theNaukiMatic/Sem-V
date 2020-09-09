import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  root: {
    minHeight: 1000,
    
  },
  title: {
    fontSize: 14,

  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  makeCenter:{
    // display :'flex',
    // flexDirection:"col",
    justifyContent:'center',
    margin : 'auto',
    alignItems : 'center'
}
}));

const ProfileLeft = () => {
  const classes = useStyles();

  const FirstName = "FirstName";
  const LastName = "LastName";
  const Designation = "Developer"
  const profileImage = "./download.jpeg";

  return (

    <Card className={classes.root}>
      <CardContent>
      <Grid container justify="center">
        <Grid item>
            <div align="center">
                <Avatar alt = "Sample Profile Pic" src={profileImage} className={classes.large} />
            </div>
            <br/>
            <br/>
            <Typography variant="h4" component="h2" align="center">
                {FirstName} {LastName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary" align="center">
                {Designation}
            </Typography>
            <br/>
            <Typography variant="body2" component="p">
            blah blah balh balhadfhlkasdhjfklhafkl; kljadfkljdsakjfhdjals fdsahfkjsadfkjsakf hjasdfklj
            <br />
            no of projects, vagera
            
            <br />
            {'"hahaha lolo dlfklsadhfkdlahsfkldhaksflhoie"'}
            </Typography>
        </Grid>
      </Grid>
        
      </CardContent>
      <CardActions>
        <Button size="small" color = "secondary">Edit Profile</Button>
      </CardActions>
    </Card>
  );
}
export default ProfileLeft;