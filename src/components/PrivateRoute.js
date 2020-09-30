import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector((state) => state.auth);
	const isAuthenticated = auth.isAuthenticated;
	return (
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? (
					<div>
						<Component {...props} />
					</div>
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

export default PrivateRoute;
