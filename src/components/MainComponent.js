import React, { useEffect, useState } from "react";
import Navbar from "./HeaderComponent";
import Profile from "./Profile";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from "./Home";
import Loading from "./LoadingComponent";
import LandingPage from "./Landing";
import PrivateRoute from "./PrivateRoute";

import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/features/auth/authSlice";
import { fetchUser } from "../store/features/user/userSlice";

function Main() {
	const user = useSelector((state) => state.user);
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	//component did mount
	useEffect(() => {
		if (auth.isAuthenticated) {
			//get all the information at the starting
			dispatch(
				loginUser({
					username: "nikrth",
					password: "python1234",
				})
			);
			dispatch(fetchUser());
		}
	}, []);

	return (
		<Router>
			<Navbar />
			<Container>
				<Route exact path="/" component={Landing} />{" "}
				<PrivateRoute path="/home" component={HomePage} />{" "}
				<PrivateRoute path="/profile/:userId" component={Profile} />{" "}
			</Container>{" "}
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
