import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/features/auth/authSlice";
import SignUp from "./SignupComponent";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignIn = () => {
	const [isNew, setNew] = useState(false);
	if (isNew) return <SignUp New={isNew} Toggle={setNew} />;
	else return <SignInPart New={isNew} Toggle={setNew} />;
};
const SignInPart = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const creds = {
			username: email,
			password: password,
		};
		console.log(creds);
		dispatch(loginUser(creds));
	};
	if (auth.isAuthenticated) {
		return <Redirect to="/" />;
	}
	return (
		<Container component="main" paddingX={2}>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={handleSubmit}
				>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{/* <FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/> */}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container>
						{/* <Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid> */}
						<Grid item>
							<Button
								onClick={() => {
									props.Toggle(!props.New);
								}}
								variant="body2"
							>
								{"Don't have an account? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};

export default SignIn;
