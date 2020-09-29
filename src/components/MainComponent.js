import React from "react";
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Navbar from "./HeaderComponent";
import Profile from "./Profile";
import SignIn from "./LoginComponent";
import SignUp from "./SignupComponent";
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./LoadingComponent";

import { useSelector, useDispatch } from "react-redux";

function Main() {
	return (
		<Router>
			<Navbar />
			<Container>
				<Route path="/" exact component={Home} />
				<Route path="/profile" component={Profile} />
				{/* <Route path="/SignIn" component={SignIn} /> */}
				<Route path="/SignUp" component={SignUp} />
			</Container>
		</Router>
	);
}

const Home = () => {
	const auth = useSelector((state) => state.auth);

	if (auth.isAuthenticated) {
		return (
			<div>
				<h1>THIS IS A TEMPORARY HOMEPAGE</h1>
				<br />
				<h1>Logged in as {auth.user.firstName}</h1>
			</div>
		);
	} else if (auth.isLoading) {
		return <Loading />;
	} else {
		return <SignIn />;
	}
};

export default Main;
