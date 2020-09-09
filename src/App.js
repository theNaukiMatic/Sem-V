import React, { Component } from 'react';
// import './App.css';
import {Grid, Button, CssBaseline} from '@material-ui/core';
import Header from "./components/HeaderComponent";
import Profile from "./components/Profile";

function App() {
  return (
    <Grid container direction = "column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10}>
          <Profile />
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </Grid>
  );
}

export default App;
