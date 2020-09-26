import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Main from './components/MainComponent'

function App() {
  return (
    // <Grid container direction="column">
    //   <Grid item>
    //     <Header />
    //   </Grid>
    //   <Grid item container>
    //     <Grid item xs={0} sm={2} />
    //     <Grid item xs={12} sm={8}>
    //       <Profile />
    //     </Grid>
    //     <Grid item xs={0} sm={2} />
    //   </Grid>
    // </Grid>
    <Main />
  );
}

export default App;
