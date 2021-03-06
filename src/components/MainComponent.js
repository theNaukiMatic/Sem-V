import React, { useEffect, useState } from "react";
import Navbar from "./HeaderComponent";
import Profile from "./Profile";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from "./Home";
import Loading from "./LoadingComponent";
import LandingPage from "./Landing";
import Group from "./Groups";
import PrivateRoute from "./PrivateRoute";
import Search from "./Search";
import updateUser from "./Profile/updateUser";

import { useSelector, useDispatch } from "react-redux";
// import { loginUser } from "../store/features/auth/authSlice";
import { fetchUser } from "../store/features/user/userSlice";
import UpdateUser from "./Profile/updateUser";
import GroupDetail from "./Groups/GroupDetailComp";

function Main() {
	// const user = useSelector((state) => state.user);
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (auth.isAuthenticated) {
			dispatch(fetchUser());
		}
	}, [auth]);

	return (
		<Router>
			<Navbar />
			<Container>
				<Route exact path="/" component={Landing} />
				<PrivateRoute path="/home" component={HomePage} />
				<PrivateRoute path="/profile/:userId" component={Profile} />
				<PrivateRoute
					path="/groupDetail/:groupId"
					component={GroupDetail}
				/>
				<PrivateRoute path="/groups" component={Group} />
				<PrivateRoute path="/search" component={Search} />
				<PrivateRoute path="/editProfile" component={UpdateUser} />
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
