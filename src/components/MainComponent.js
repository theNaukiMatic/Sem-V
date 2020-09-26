import React, { Component } from 'react';
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Navbar from "./HeaderComponent";
import Profile from "./Profile";
import SignIn from "./LoginComponent";
import SignUp from "./SignupComponent";
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main() {
    return (
        <Router>
            <Navbar />
            <Container>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/SignUp" component={SignUp} />
            </Container>
        </Router>

    );
}

const Home = () => {
    return (
        <h1>THIS IS A TEMPORARY HOMEPAGE</h1>
    );
}

export default Main;