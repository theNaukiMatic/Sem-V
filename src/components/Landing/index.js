import React from "react";
import SignIn from "../LoginComponent";
import {
	Card,
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	card: {
		padding: theme.spacing(4),
	},
}));

const LandingPage = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Container>
				<Grid container spacing={3} className={classes.root}>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>
							<Typography
								variant="h1"
								align="center"
								color="primary"
								display="block">
								App Name
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card className={classes.card}>
							<SignIn />
						</Card>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default LandingPage;
