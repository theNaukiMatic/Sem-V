import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		"& > * + *": {
			marginLeft: "auto",
		},
	},
}));

export default function Loading() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{/* <CircularProgress color="secondary" /> */}
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				style={{ minHeight: "100vh" }}>
				<Grid item xs={3}>
					<CircularProgress />
				</Grid>
			</Grid>
		</div>
	);
}
