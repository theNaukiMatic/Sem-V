import React from "react";
import Navbar from "./HeaderComponent";
import Profile from "./Profile";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from "./Home";
import Loading from "./LoadingComponent";
import LandingPage from "./Landing";
import PrivateRoute from "./PrivateRoute";

import { useSelector } from "react-redux";

function Main() {
	return (
		<Router>
			<Navbar />
			<Container>
				<Route exact path="/" component={Landing} />
				<PrivateRoute path="/home" component={HomePage} />
				<PrivateRoute path="/profile" component={Profile} />
			</Container>
		</Router>
	);
}

const Landing = () => {
	const auth = useSelector((state) => state.auth);

	if (auth.isAuthenticated) {
		return <Redirect to="/home" />;
	} else if (auth.isLoading) {
		return <Loading />;
	} else {
		return <LandingPage />;
	}
};

export default Main;
